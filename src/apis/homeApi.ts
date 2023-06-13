import axios from 'axios';
import { API } from '../services/api';
import { basicApi } from '../utils/config';

// axios.defaults.baseURL = 'http://localhost:5173';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export async function getRecentPost() {
  const response = await basicApi.get(API.recentPost);
  return response.data.data.recentPost;
}
