import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAdoptComments, getAdoptDetail, getAdoptPosts } from '@redux/slice/adoptSlice';
import  { AxiosResponse } from 'axios'
import { searchFacet,AdoptPost, AdoptDetail, NoticeId, AdoptComment, userComment } from '@/types/Adopt';
import { basicApi } from '@redux/api/axiosConfig';


const token ="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5jb20iLCJhdXRoIjoiUk9MRV9BRE1JTixST0xFX1VTRVIiLCJtZW1iZXJJZCI6MSwiZXhwIjoxNjkyNTg1OTk4fQ.6Y1L_XaKvQrqwn9bM4h7oySeOXT-w5rhoM5gGgm5THxB9eF7TpijB4fxZKCoveo0a1ljoMCljwrualDKc7T4Hw"

interface AdoptResultDataType<T> {
    status: string,
    timestamp: string,
    message: string,
    data:T
}


export const getAdoptPostThunk = createAsyncThunk(
    'adopt/getAdoptPosts',
    async (facet: any, thunkApi) => {
        try {
            await basicApi<AdoptResultDataType<AdoptPost[]>,AxiosResponse<AdoptResultDataType<AdoptPost[]>,Partial<searchFacet>>,Partial<searchFacet>>({
                method: 'get',
                url: '/v1/adoption/notices',
                headers: {
                    'withCredentials': true, 
                },
                params:{...facet}
            }).then(result => {
                if (result.data) {
                    const { data }  = result.data;
                    if (data) {
                        thunkApi.dispatch(getAdoptPosts(data));
                    }
                }
              
                
            });
        } catch(error) {
            console.error('error',error);
        }
    
    
    }

)
// 입양 공고 상세
export const getAdoptDetailThunk = createAsyncThunk(
    'adopt/getAdoptDetail',
    async (noticeId: number, thunkApi) => {
       try {
            await basicApi<AdoptResultDataType<AdoptDetail>,AxiosResponse<AdoptResultDataType<AdoptDetail>,NoticeId>,NoticeId>({
                method: 'get',
                url: `/v1/adoption/notices/${noticeId}`,
            }).then(result => {
                if (result.data) {
                    const { data }  = result.data;
                    if (data) {
                        thunkApi.dispatch(getAdoptDetail(data));
                    }
                }
               
            });
        } catch(error) {
             console.error('error',error);
        }
    }

)



// 입양 공고 올리기
export const setAdoptPostThunk = createAsyncThunk(
    'adopt/setAdoptPost',
    async (obj: Partial<Omit<AdoptDetail, 'noticeId'>>) => {
       try {
            await basicApi({
                method: 'post',
                url: `/v1/adoption/notices`,
                headers: {
                    'Authorization':`Bearer ${token}`
                },
                data: {
                    ...obj, thumbnail: { uploadId: 1, url: 'https://storage.googleapis.com/myohanmeeting/cat/b590421e-afa0-4ebb-a6eb-88808e30dc0c-1692021140667.jpg' },
            catPictures:[{uploadId:2,url:"https://storage.googleapis.com/myohanmeeting/cat/a12373a0-b89d-4c19-9f4c-b5308a4629f6-1692021141642.jpg"}]    }
            }).then(result => {
                console.log('result', result);
               
            });
        } catch(error) {
             console.error('error',error);
        }
    }

)

// 내 코멘트 쓰기
export const setAdoptComments = createAsyncThunk(
    'adopt/setAdoptComment',
    async (obj: userComment) => {
       try {
           await basicApi({
               method: 'post',
               url: `/v1/adoption/notices/comments`,
               headers: {
                   'Authorization': `Bearer ${token}`
               },
               data: { ...obj }
           }).then(result => {
                console.log('result', result);
               
            });
        } catch(error) {
             console.error('error',error);
        }
    }

)

// 코멘드 읽어오기
export const getAdoptCommentsThunk = createAsyncThunk(
    'adopt/getAdoptComments',
    async (noticeId: NoticeId, thunkApi) => {
       try {
           await basicApi<AdoptResultDataType<Array<AdoptComment>>,AxiosResponse<AdoptResultDataType<Array<AdoptComment>>,NoticeId>,NoticeId>({
               method: 'get',
               url: `/v1/adoption/notices/${noticeId}/comments`,
               headers: {
                   'Authorization': `Bearer ${token}`
               },
           }).then(result => {
                console.log('123result', result);
                if (result.data) {
                    const { data }  = result.data;
                    if (data) {
                        thunkApi.dispatch(getAdoptComments(data));
                    }
                }
            });
        } catch(error) {
             console.error('error',error);
        }
    }

)


