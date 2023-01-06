import createAxios from "../utiles/request";

const api = {
  showfile: "/file/getfiles/",
};

export default function getfile(token,require_path){
    return createAxios({
        url:api.showfile,
        method:'GET',
        params:{
          token,
          require_path
        }
    })
}