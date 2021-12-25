import axios from 'axios';

const api = axios.create({
  baseURL: 'https://epice-app.herokuapp.com/',
});

export default api;