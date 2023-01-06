import createAxios from "../utiles/request";

const api = {
  showfile: "/file/upload/",
};

export default function getfile(token,filename,path,newData){
  return createAxios({
      url:api.showfile,
      method:'POST',
      data:{
        token,
        filename,
        path,
        file:newData
      }
  })
}