import { API } from '../../../services/api';
import { basicApi } from '../../../utils/config';

export interface GetUserInfoResponse {
  userInfo: {
    memberId: number;
    email: string;
    name: string;
    nickName: string;
    profileImage: {
      uploadId: number;
      url: string;
    };
    phoneNumber: string;
    certified: string;
    createAt: string;
  }[];
}

export function getUserInfo() {
  return basicApi.get<GetUserInfoResponse>(API.userinfo);
}
