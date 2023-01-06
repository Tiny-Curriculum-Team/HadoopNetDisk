import createAxios from "../utiles/request";

const api = {
  cancelfile: "/share/cancelshare/",
};

export default function cancelShare(share_id,share_password){
    return createAxios({
        url:api.cancelfile,
        method:'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
          }, 
        params:{
            share_id,
            share_password
        }
    })
}