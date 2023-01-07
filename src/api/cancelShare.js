import createAxios from "../utiles/request";

const api = {
  cancelfile: "/share/cancelshare/",
};

export default function cancelShare(token,file_name,share_password){
    return createAxios({
        url:api.cancelfile,
        method:'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
          }, 
        params:{
            token,
            file_name,
            share_password
        }
    })
}