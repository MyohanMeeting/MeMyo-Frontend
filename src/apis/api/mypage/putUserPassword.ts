import { API } from './../../../services/api';
import { basicApi } from '../../../utils/config';
import { AxiosResponse } from 'axios';

interface PutUserEmailRequest {
  currentPassword: string;
  newPassword: string;
}

export function putUserPassword(data: PutUserEmailRequest) {
  return basicApi.put<AxiosResponse>(API.putUserPassword, data);
}
