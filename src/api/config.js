import myaxios from 'axios';

export const headers = {
  headers: {
    Authorization: 'Bearer asdfsfadsfa',
  },
};

export const axios = myaxios.create({ baseURL: 'https://exam-simulation.azurewebsites.net' });
