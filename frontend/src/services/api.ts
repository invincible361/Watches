import axios from 'axios';

// Create axios instance with base URL
const API = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add interceptor to include auth token in requests
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Auth services
export const authAPI = {
  register: (userData: { name: string; email: string; password: string }) => 
    API.post('/auth/register', userData),
  
  login: (userData: { email: string; password: string }) => 
    API.post('/auth/login', userData),
};

// Watch services
export const watchAPI = {
  getAllWatches: () => API.get('/watches'),
  getWatchById: (id: string) => API.get(`/watches/${id}`),
  getWatchesByBrand: (brand: string) => API.get(`/watches/brand/${brand}`),
};

// Order services
export const orderAPI = {
  createOrder: (orderData: any) => API.post('/orders', orderData),
  getOrderById: (id: string) => API.get(`/orders/${id}`),
};

export default API;