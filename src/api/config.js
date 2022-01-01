import Axios from 'axios';

export const getHeaders = () => {
  return { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };
};

export const axios = Axios.create({ baseURL: 'http://localhost:5000' });
