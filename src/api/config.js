import Axios from 'axios';

export const getHeaders = () => {
  return { headers: { Authorization: `Bearer ${localStorage.getItem('AUTH_TOKEN')}` } };
};

export const axios = Axios.create({
  baseURL: '',
});
