import axios from 'axios';

const ApiManager = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  withCredentials: true,
  responseType: 'json',
});

export default ApiManager;
