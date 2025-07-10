// services/api.ts
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://card-nacional-api.onrender.com/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
