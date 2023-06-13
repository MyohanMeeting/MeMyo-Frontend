import { API } from '../services/api';
import { basicApi } from '../utils/config';

export async function getRecentPost() {
  const response = await basicApi.get(API.recentPost);
  return response.data.data.recentPost;
}
