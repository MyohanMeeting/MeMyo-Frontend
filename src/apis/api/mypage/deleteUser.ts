import { basicApi } from '../../../utils/config';

interface DeleteUserResponse {
  memberId: number;
}

export function deleteUser() {
  return basicApi.delete('/member');
}
