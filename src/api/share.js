import createAxios from "../utiles/request";

const api = {
  sharefile: "/share/openshare/",
};

export default function shareFile(newData){
  return createAxios({
      url:api.sharefile,
      method:'POST',
      Headers:{
        'Content-Type': 'multipart/form-data'
      },
      data:newData
  })
}