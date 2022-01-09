import { axios, getHeaders } from './config';

export const uploadImages = (formData) => {
  const headers = getHeaders();
  headers.headers['Content-Type'] = 'multipart/form-data';
  return axios.post('/utils/upload/images', formData, headers);
};
