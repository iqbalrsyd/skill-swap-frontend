import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8000/api',
    timeout: 1000,
});

export default API;