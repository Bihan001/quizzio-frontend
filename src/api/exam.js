import { axios, getHeaders } from './config';
import { examResult } from './mock-data';

// ------------------------------------------------
// baseURL: 'http://localhost:5000'
// -------------------------------------------------

export const getExams = (filters) => {
  return axios.post('/exam/all', filters);
};

export const getExamDetails = (id) => {
  return axios.get(`/exam/${id}`);
};

export const createExam = async (data) => {
  return axios.post('/exam/create', data, getHeaders());
};

export const registerInExam = async (data) => {
  return axios.post('/exam/register', data, getHeaders());
};

export const getUserExamRegisterStatus = async (examId) => {
  return axios.get(`/exam/exam-registered?examId=${examId}`, getHeaders());
};

export const startExam = (examId) => {
  return axios.get(`/exam/${examId}/start`, getHeaders());
};

export const submitExamAnswers = (data) => {
  return axios.post(`/exam/submit`, data, getHeaders());
};

export const getExamTags = () => {
  return axios.get('/exam/tags');
};

export const getExamTypes = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [
          { label: 'Public', value: 'public' },
          { label: 'Private', value: 'private' },
        ],
      });
    }, 100);
  });
};

export const getQuestionTypes = () => {
  return axios.get('/exam/question-types');
};

export const getExamResult = (examId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: examResult,
      });
    }, 1000);
  });
};
