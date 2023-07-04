import { API } from '../../../services/api';
import { basicApi } from '../../../utils/config';

export interface GetUserInfoResponse {
  memberId: number;
  email: string;
  name: string;
  nickName: string;
  profileImage: string;
  phoneNumber: string;
  certified: string;
  createAt: string;
}

export function getUserInfo() {
  return basicApi.get<GetUserInfoResponse>(API.userinfo);
}
