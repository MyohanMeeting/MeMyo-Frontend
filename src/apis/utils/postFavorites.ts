import { API } from '../../services/api';
import { basicApi } from '../../utils/config';

export interface PostFavoritesRequest {
  noticeId: number;
}

export interface PostFavoritesResponse {
  favoriteId: number;
}

export function postFavorites(noticeId: PostFavoritesRequest) {
  return basicApi.post<PostFavoritesResponse>(API.favorites, noticeId);
}
