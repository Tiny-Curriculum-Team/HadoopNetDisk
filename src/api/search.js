import createAxios from "../utiles/request";

const api = {
  searchfile: "/file/search/",
};

export default function searchFile(token,prefix){
  return createAxios({
      url:api.searchfile,
      method:'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        }, 
      params:{
        token,
        prefix
      }
  })
}