import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAdoptComments, getAdoptDetail, getAdoptPosts } from '@redux/slice/adoptSlice';
import  { AxiosResponse } from 'axios'
import { searchFacet,AdoptPost, AdoptDetail, NoticeId, AdoptComment, userComment, uploadIdArr, AdoptForm } from '@/types/Adopt';
import { basicApi } from '@redux/api/axiosConfig';


const token =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5jb20iLCJhdXRoIjoiUk9MRV9BRE1JTixST0xFX1VTRVIiLCJtZW1iZXJJZCI6MSwiZXhwIjoxNjkzMDE5MzE3fQ.45B_5hvRuykKNnOS0o_oIZ_MXHpKhbOs_-JQeBn9QAqyEsnPOYrnyuZDLDRcGB_7vwYvvOqnRJFcqyqKk2ejMw';

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
                        console.log('data',data)
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



export const setAdoptPostImg = createAsyncThunk(
  'adopt/setAdoptPostImg',
    async (files: File[]) => {
        console.log('files', files);
        const formData = new FormData();
        formData.append('category', 'CAT');
        for (const [_key, value] of Object.entries(files)) {
            formData.append('files', value);
        }
            
        
        
        console.log('폼데이터', formData);
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        }
        let res;
        try {
            await basicApi<
              AdoptResultDataType<uploadIdArr>,
              AxiosResponse<AdoptResultDataType<uploadIdArr>, FormData>,
              FormData
            >({
              method: 'post',
              url: `/v1/files`,
              headers: headers,
              data: formData,
            }).then((result) => {
                console.log('result', result);
                if (result.data) {
                  const { data } = result.data;
                    console.log('data', data)
                    res= data;
                }
            });
        } catch (error) {
            res = error;
            console.error('error', error);
        }
        return res;
  }
);


// 입양 공고 올리기
export const setAdoptPostThunk = createAsyncThunk(
    'adopt/setAdoptPost',
    async (obj: Required<AdoptForm>) => {
       try {
            await basicApi({
                method: 'post',
                url: `/v1/adoption/notices`,
                headers: {
                    'Authorization':`Bearer ${token}`
                },
                data:obj
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




