import { axios, getHeaders } from './config';
/**
 *
 * @param {string} email User's Email
 * @param {string} password User's Password
 * @returns Promise<AxiosResponse<any, any>>
 * @example
 * import {loginWithEmailAndPassword} from 'api/user';
 * loginWithEmailAndPassword('bihan', 'abcdefgh').then(res => console.log(res.data)).catch(err => console.log(err));
 */

export const loginWithEmailAndPassword = (email, password) => {
  return axios.post('/user/login', { email, password }, getHeaders());
};

export const registerNewUser = (data) => {
  return axios.post('/user/register', data, getHeaders());
};

export const getCurrentUser = () => {
  return axios.get('/user/current', getHeaders());
};

export const getHostedExams = () => {
  return axios.get('/user/exams-hosted', getHeaders());
};

export const getGivenExams = () => {
  return axios.get('/user/exams-given', getHeaders());
};
