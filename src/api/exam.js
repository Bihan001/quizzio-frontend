
import { axios, getHeaders } from './config';
import { examFetchedData } from './mock-data';

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

export const startExam = (examId) => {
  return axios.get(`/exam/${examId}/start`, getHeaders());
};

export const submitExamAnswers = (examId, answers) => { };

export const getExamTags = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [
          'Maths',
          'Physics',
          'Chemistry',
          'Exam',
          'Contest',
          'Computer Science',
          'Competitive Programming',
          'Dynamic Programming',
          'Graph Theory',
          'Literature',
        ],
      });
    }, 1000);
  });
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
    }, 1000);
  });
};

export const getQuestionTypes = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [
          { value: 'mcq', label: 'MCQ - 1 correct option' },
          {
            value: 'multipleOptions',
            label: 'MCQ - More than 1 correct option',
          },
          { value: 'fillInTheBlanks', label: '1 word answer' },
        ],
      });
    }, 1000);
  });
};

export const submitNewExamData = (examData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          examId: '123',
        },
      });
    }, 1000);
  });
};
