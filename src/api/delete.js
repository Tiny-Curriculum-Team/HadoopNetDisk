import createAxios from "../utiles/request";

const api = {
  deletefile: "/file/delete/",
};

export default function deleteFile(token,file_paths){
  return createAxios({
      url:api.deletefile,
      method:'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        }, 
      data:{
        token,
        file_paths
      }
  })
}