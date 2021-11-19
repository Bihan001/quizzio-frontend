import { axios, headers } from './config';
/**
 *
 * @param {string} email User's Email
 * @param {string} password User's Password
 * @returns Promise<AxiosResponse<any, any>>
 * @example signin('bihan', 'abcdefgh').then(res => console.log(res.data)).catch(err => console.log(err))
 */
export const signin = (email, password) => {
  return axios.post('https://www.google.com', { email, password }, headers);
};
