import { API } from '../../services/api';
import { basicApi } from '../../utils/config';

export interface PostFavoritesRequest {
  catid: number;
}

export interface PostFavoritesResponse {
  favoriteId: number;
}

export function postFavorites(catid: PostFavoritesRequest) {
  return basicApi.post<PostFavoritesResponse>(API.favorites, catid);
}
