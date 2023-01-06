import createAxios from "../utiles/request";

const api = {
  showfile: "/file/getfiles/",
};

export default function getfile(){
    return createAxios({
        url:api.showfile,
        method:'GET',
    })
}