import createAxios from "../utiles/request";

const api = {
  upload: "/file/require_path/",
  share:"/file/upload/"
};

export function getUpload(file){
    return createAxios({
        url:api.upload,
        method:'post',
        data:{
            file_paths:file
        }
    })
}

export function getshare(file){
    return createAxios({
        url:api.share,
        method:'post',
        data:{
            require_path:file
        }
    })
}