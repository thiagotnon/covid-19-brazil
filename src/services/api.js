import axios from 'axios';

const api = axios.create({
  baseURL: 'https://covid19-brazil-api.now.sh/api/report/v1' //process.env.REACT_APP_API_URL
});

export default api;