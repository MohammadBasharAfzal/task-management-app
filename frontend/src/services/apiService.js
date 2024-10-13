// /frontend/src/services/apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/tasks'; // Change as needed

export const getTasks = () => axios.get(API_URL);
export const createTask = (task) => axios.post(API_URL, task);
export const updateTask = (taskId, task) => axios.put(`${API_URL}/${taskId}`, task);
export const deleteTask = (taskId) => axios.delete(`${API_URL}/${taskId}`);
