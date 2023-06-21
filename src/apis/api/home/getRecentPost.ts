import { API } from '../../../services/api';
import { basicApi } from '../../../utils/config';

export interface GetRecentPostResponse {
  data: {
    recentPost: {
      adoptNoticeId: number;
      catId: number;
      name: string;
      thumbnail: string;
      registNumber: number;
      species: string;
    }[];
  };
}

export function getRecentPost() {
  return basicApi.get<GetRecentPostResponse>(API.recentPost);
}
