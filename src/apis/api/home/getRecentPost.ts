import { API } from '../../../services/api';
import { basicApi } from '../../../utils/config';

export interface GetRecentPostResponse {
  data: {
    noticeId: number;
    noticeTitle: string;
    noticeStatus: string;
    thumbnail: string;
    authorName: string;
    catName: string;
    catSpecies: string;
    shelterCity: string;
    applicationCount: number;
    commentCount: number;
    createdAt: string;
  }[];
}

export function getRecentPost() {
  return basicApi.get<GetRecentPostResponse>(API.recentPost);
}
