import { API } from '../../../services/api';
import { basicApi } from '../../../utils/config';

export interface GetRecentPostResponse {
  adoptNoticeId: number;
  catName: string;
  thumbnail: string;
  city: string;
  species: string;
}

export function getRecentPost() {
  return basicApi.get<GetRecentPostResponse[]>(API.recentPost);
}
