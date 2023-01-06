import axios from 'axios'

function createAxios(axiosConfig){
    const request = axios.create({
      baseURL: '/api',      
      timeout: 10000
    })
  
    return request(axiosConfig)
  }
  
  export default createAxios