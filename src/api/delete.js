import createAxios from "../utiles/request";

const api = {
  deletefile: "/file/delete/",
};

export default function deleteFile(token,file_paths){
  return createAxios({
      url:api.deletefile,
      method:'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        }, 
      params:{
        token,
        file_paths
      }
  })
}