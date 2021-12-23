import axios from 'axios';

const api = axios.create({
  baseURL: 'https://epice-backend.herokuapp.com/',
});

export default api;