import createAxios from "../utiles/request";

const api = {
  showfile: "/file/upload/",
};

export default function getfile(token,filename,suffix,path,newData){
    return createAxios({
        url:api.showfile,
        method:'POST',
        data:{
          token,
          filename,
          suffix,
          path,
          file:newData
        }
    })
}