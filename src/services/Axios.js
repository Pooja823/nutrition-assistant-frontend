import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://nutrition-assistant-backend-production.up.railway.app/api',
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token') || '';
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

export const Axios = instance;
