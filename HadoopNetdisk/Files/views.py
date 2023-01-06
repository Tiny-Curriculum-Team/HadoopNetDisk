import jwt
import os.path
import urllib.parse
import sys

from shutil import rmtree
from Files.utils import *
from Users.models import User
from django.conf import settings
from django.http import FileResponse, JsonResponse


def upload_files(request):
    # 接收到formdata的出文件之外的数据
    token = request.POST.get('token')
    info_dict = jwt.decode(token, 'secret_key', algorithms=['HS256'])
    user_name = info_dict['username']
    file_path = request.POST.get('path')
    new_file = request.FILES.get('file')
    file_name = new_file.name
    file_size = new_file.size
    temp_dir = os.path.join(settings.MEDIA_ROOT, user_name)
    if not os.path.exists(temp_dir):
        os.mkdir(temp_dir)
    temp_path = os.path.join(temp_dir, file_name)

    if new_file.multiple_chunks():
        with open(temp_path, "wb") as f:
            for chunk in new_file.chunks():
                f.write(chunk)
    else:
        with open(temp_path, "wb") as f:
            f.write(new_file.read())

    if not (token and new_file):
        return JsonResponse({'code': 500, 'message': '请求参数错误'})
    try:
        hdfs_path = os.path.join("_files", user_name, file_path)
        client_hdfs = connect_to_hdfs()
        upload_to_hdfs(client_hdfs, temp_path, hdfs_path)
        current_user = User.objects.get(user_name=user_name)
        current_user.available_store -= file_size
        current_user.save()
        rmtree(os.path.join(settings.MEDIA_ROOT, user_name))
    except Exception as e:
        print(e)
        rmtree(os.path.join(settings.MEDIA_ROOT, user_name))
        return JsonResponse({'code': 500, 'message': 'hdfs error'})
    try:
        client_hbase = connect_to_hbase()
        if not ("SBhbase" in list_all_tables(client_hbase)):
            create_table(client_hbase, "SBhbase", "fileinfo", "filedata")
            # "fileinfo"                            "filedata"
            # "filename", "suffix", "hdfspath"      "username", "permission", "size"
        reference_path = os.path.join(hdfs_path, file_name)
        row_key = file_name + "|" + reference_path
        insert_a_row(client_hbase, "SBhbase", row_key, "fileinfo", "filename", file_name)
        insert_a_row(client_hbase, "SBhbase", row_key, "fileinfo", "suffix", file_name.split('.')[-1])
        insert_a_row(client_hbase, "SBhbase", row_key, "fileinfo", "hdfspath", reference_path)
        insert_a_row(client_hbase, "SBhbase", row_key, "filedata", "username", user_name)
        insert_a_row(client_hbase, "SBhbase", row_key, "filedata", "permission", 0)
        insert_a_row(client_hbase, "SBhbase", row_key, "filedata", "size", sys.getsizeof(new_file))
        return JsonResponse({'code': 200, 'message': '上传成功'})
    except Exception as e:
        print(e)
        return JsonResponse({'code': 500, 'message': 'hbase error'})

    # 接收文件，getlist是接收多个文件
    # formdata在vue中同一个key传入了多个value，value成为了一个数组，所以需要使用getlist来获取所有文件
    # new_files = request.FILES.getlist('new_files')

    # formdata在vue中同一个key只有一个文件类型的value，可以使用get来获取文件
    # new_files = request.FILES.get('file')


def download_files(request):
    token = request.GET.get('token')
    info_dict = jwt.decode(token, 'secret_key', algorithms=['HS256'])
    user_name = info_dict['username']

    require_path = request.GET.get('require_path')
    cli = connect_to_hdfs()
    file_path = os.path.join('_files', user_name, require_path)
    temp_path = os.path.join(settings.MEDIA_ROOT, require_path)
    file_name = file_path.split("/")[-1]
    download_from_hdfs(cli, file_path, temp_path)

    # compress_file_name = user_name + '.zip'
    # compress_file_path = os.path.join(settings.MEDIA_ROOT, compress_file_name)
    # compress_path = os.path.join(settings.MEDIA_ROOT, user_name)
    # zip_ya(compress_path, compress_file_name, settings.MEDIA_ROOT)
    # print("#" * 64)

    # file = open(compress_file_path, 'rb')
    file = open(temp_path, 'rb')
    file_response = FileResponse(file)
    file_response['Content-Type'] = 'application/octet-stream'
    file_response[
        "Access-Control-Expose-Headers"] = 'Content-Disposition'
    file_response['Content-Disposition'] = 'attachment;filename={}'.format(urllib.parse.quote(file_name))
    # os.remove(temp_path)
    return file_response


def search_for_files(request):
    token = request.GET.get('token')
    info_dict = jwt.decode(token, 'secret_key', algorithms=['HS256'])
    user_name = info_dict['username']
    prefix = request.GET.get("prefix")
    try:
        client_hbase = connect_to_hbase()
        result = find_file(client_hbase, "SBhbase", prefix, ["fileinfo:filename"])
        return JsonResponse(result)
    except Exception as e:
        print(e)
        return JsonResponse({"code": 500, "message": "Error to search"})


def del_files(request):
    token = request.GET.get('token')
    info_dict = jwt.decode(token, 'secret_key', algorithms=['HS256'])
    user_name = info_dict['username']

    file_path = request.GET.get('file_paths')
    cli = connect_to_hdfs()
    try:
        file_path = os.path.join('/user', 'hadoop', '_files', user_name, file_path)
        hdfs_del_files(cli, file_path)
        return JsonResponse({'code': 200, 'message': '删除操作已完成'})
    except Exception as e:
        print(e)
        return JsonResponse({'code': 500, 'message': '删除操作失败，文件不存在'})


def get_all_files(request):
    token = request.GET.get('token')
    info_dict = jwt.decode(token, 'secret_key', algorithms=['HS256'])
    user_name = info_dict['username']
    request_path = request.GET.get('require_path')
    cli = connect_to_hdfs()
    hdfs_check_user_folder_exists(cli, user_name)
    user_root_dir = os.path.join('_files', user_name, request_path)
    file_dict = hdfs_list(cli, user_root_dir, verbose=True)
    res_dict = {}
    file_id = 0
    for item in file_dict:
        res_dict.update({file_id: {"file_name": item[0], "type": item[1]['type']}})
        file_id += 1
    return JsonResponse(res_dict)
