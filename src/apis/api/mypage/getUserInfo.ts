import { API } from '../../../services/api';
import { basicApi } from '../../../utils/config';

export interface GetUserInfoResponse {
  userInfo: {
    email: string;
    nickname: string;
    phoneNumber: string;
    profileImage: string;
    oauthType: string;
  }[];
}

export function getUserInfo() {
  return basicApi.get<GetUserInfoResponse>(API.userinfo);
}
