
import { axios, headers } from './config';

export const getAllUpcomingExams = () => {
  return axios.get('/exam/getAllUpcomingExams');
};
