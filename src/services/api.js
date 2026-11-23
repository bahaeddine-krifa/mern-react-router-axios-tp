import axios from 'axios';

// Création d'une instance Axios centralisée
const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export default api;
