import createAxios from "../utiles/request";

const api = {
  showfile: "/share/getshare/",
};

export default function getShare(token){
    return createAxios({
        url:api.showfile,
        method:'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
          }, 
        params:{
          token
        }
    })
}