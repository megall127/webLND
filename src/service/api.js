import axios from 'axios';


const api = axios.create({
    baseURL: "http://127.0.0.1:3333/api",
  });

  api.interceptors.request.use(async (config) => {
    const accessToken = localStorage.getItem('@token');
  
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  
    return config;
  });



export default api;