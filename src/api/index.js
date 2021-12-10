// API folder, used for store config for baseURL and call the TOKEN (stocked in token folder).

import axios from 'axios';
import TOKEN from '../token';

const config = {
  baseURL: 'http://ec2-3-83-182-226.compute-1.amazonaws.com/api/v1',
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

const api = axios.create(config);

export default api;
