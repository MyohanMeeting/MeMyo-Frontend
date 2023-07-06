import { API } from '../../../services/api';
import { basicApi } from '../../../utils/config';

export interface PatchUserInfoResponse {
  name: string;
  nickName: string;
  phoneNumber: string;
}

export interface PatchUserInfoRequest {
  name: string;
  nickName: string;
  phoneNumber: string;
}

export function patchUserInfo(data: PatchUserInfoRequest) {
  return basicApi.patch<PatchUserInfoResponse>(API.userinfo, data);
}
