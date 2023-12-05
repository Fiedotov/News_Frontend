import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com';

// Add your endpoints
const API_ENDPOINTS = {
  login: '/auth/login',
  register: '/auth/register',
  // ...other endpoints
};

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  // You can add more settings here, like headers or auth tokens
});

export const login = async (username, password) => {
  try {
    const response = await apiClient.post(API_ENDPOINTS.login, { username, password });
    return response.data;
  } catch (error) {
    // Handle error
    throw error;
  }
};

export const register = async (username, email, password) => {
  try {
    const response = await apiClient.post(API_ENDPOINTS.register, { username, email, password });
    return response.data;
  } catch (error) {
    // Handle error
    throw error;
  }
};

// ...other API functions

export default apiClient;
