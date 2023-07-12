import { API } from '../../../services/api';
import { basicApi } from '../../../utils/config';

export interface PatchUserInfoResponse {
  member: {
    nickname: string;
    phoneNumber: string;
    profileImage: string;
  };
}

export interface PatchUserInfoRequest {
  nickname: string;
  phoneNumber: string;
  profileImage: string;
}

export function patchUserInfo(data: PatchUserInfoRequest) {
  return basicApi.patch<PatchUserInfoResponse>(API.userinfo, data);
}
