import axios from './axiosConfig.js';
export const loginRequest = async (user) => await axios.post('/auth/login',user);
