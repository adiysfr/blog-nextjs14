import axios from "axios";
import { jwtDecode } from "jwt-decode";

const axiosJWTInterceptors = axios.create();

axiosJWTInterceptors.interceptors.request.use(async (config) => {
  const localStorageData = localStorage.getItem("tokenAuth");
  const expire = JSON.parse(localStorageData!)?.expireToken; 
  const id = JSON.parse(localStorageData!)?.id; 
  const tokenData = JSON.parse(localStorageData!)
  
  const currentDate = new Date();
  if (expire * 1000 < currentDate.getTime()) {
    try {
      const res = await axios.get(`http://103.175.218.12:4000/refresh-token/${id}`, {
        headers: {
          'api-key': '05f0b227-d216-4ba9-8c98-8be9b5e5c48b'
        }
      });
      const expireToken = jwtDecode(res.data.token)
      config.headers.Authorization = `Bearer ${res.data.token}`;
      localStorage.setItem("tokenAuth", JSON.stringify({...tokenData, access_token: res.data.token, expireToken:expireToken.exp }));
    } catch (error) {
      console.log("error ,interceptor a", error)
      localStorage.removeItem("tokenAuth");
      // return Promise.reject(error);
    }
  }
  return config;
}, (error) => {
  console.log("error ,interceptor b", error)
  // return Promise.reject(error);
});

export default axiosJWTInterceptors;