import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://mytinerary-server.onrender.com/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
