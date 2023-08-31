import { basicApi } from '../utils/config';

export async function uploadFile(data: string[]) {
  const res = await basicApi.post('/files', { data });
  return res.data;
}

export async function deleteFile(data: { uploadIds: string[] }) {
  const res = await basicApi.delete('/files', { data });
  return res.data;
}

export async function getFileDetails(uploadId: string) {
  const res = await basicApi.get(`/files/${uploadId}`);
  return res.data;
}
