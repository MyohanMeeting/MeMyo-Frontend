import { API } from '../../../services/api';
import { basicApi } from '../../../utils/config';

function putUserEmail(data: string) {
  basicApi.put(API.putUserEmail, data);
}
