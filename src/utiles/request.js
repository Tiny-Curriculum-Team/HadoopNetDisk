import axios from 'axios'

function createAxios(axiosConfig){
    const request = axios.create({
      baseURL: '/api',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        },       
      timeout: 10000
    })
  
    return request(axiosConfig)
  }
  
  export default createAxios