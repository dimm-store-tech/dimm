import axios from './axiosConfig.js';
export const getEmployeesRequest = async () => await axios.get('/employee');
export const getEmployeeRequest = async (id) => await axios.get(`/employee/${id}`);