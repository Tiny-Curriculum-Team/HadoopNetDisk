import createAxios from "../utiles/request";

const api = {
  showfile: "/file/getfiles/",
};

export default function getfile(token,require_path){
    return createAxios({
        url:api.showfile,
        method:'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
          }, 
        params:{
          token,
          require_path
        }
    })
}