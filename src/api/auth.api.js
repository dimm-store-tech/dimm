import axios from './axiosConfig.js';
export const loginRequest = async (user) => await axios.post('/auth/login',user);

export const profileRequest = async () => await axios.get('/auth/profile');
