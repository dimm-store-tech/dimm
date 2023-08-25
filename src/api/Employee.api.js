import axios from './axiosConfig.js';
export const getEmployeesRequest = async () => await axios.get('/employee');