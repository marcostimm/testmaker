import axios from 'axios';

export default function setAuthorizationToken(token) {
  if (token) {
    // Add token to a header of all requests
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    // Intercept 401 Unauthorized and redirect to login page
    axios.interceptors.response.use(function (response) {
      return response;
    }, function (error) {
      console.log(">>>> error")
      console.log(error)
      if(error.response.status === 401) { 
        window.location.href = '/login'        
      }
      return Promise.reject(error);
    });
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}