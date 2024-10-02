import axios from 'axios';

const ApiManager = axios.create({
  baseURL: 'https://voting-management-system-kxjt.onrender.com/api/v1',
  withCredentials: true,
  responseType: 'json',
});

export default ApiManager;
