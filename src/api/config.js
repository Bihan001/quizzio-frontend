import Axios from 'axios';

export const headers = {
  headers: {
    Authorization: 'Bearer asdfsfadsfa',
  },
};

export const axios = Axios.create({ baseURL: 'http://localhost:5000' });
