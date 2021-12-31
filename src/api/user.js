import { axios, headers } from './config';
/**
 *
 * @param {string} email User's Email
 * @param {string} password User's Password
 * @returns Promise<AxiosResponse<any, any>>
 * @example
 * import {signin} from 'api/user';
 * signin('bihan', 'abcdefgh').then(res => console.log(res.data)).catch(err => console.log(err));
 */

export const signin = (email, password) => {
  return axios.post('/signin', { email, password }, headers);
};

export const getExam = (examId, userId) =>
  axios.get(`/user/get-exam?examId=${examId}&userId=${userId}`);
