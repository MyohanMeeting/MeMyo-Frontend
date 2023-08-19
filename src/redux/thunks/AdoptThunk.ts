import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAdoptDetail, getAdoptPosts } from '@redux/slice/adoptSlice';
import  { AxiosResponse } from 'axios'
import { searchFacet,AdoptPost, AdoptDetail, NoticeId } from '@/types/Adopt';
import { basicApi } from '@redux/api/axiosConfig';


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
                headers: { 'withCredentials': true},
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

export const setAdoptPostThunk = createAsyncThunk(
    'adopt/setAdoptPost',
    async (obj: Partial<Omit<AdoptDetail, 'noticeId'>>) => {
       try {
            await basicApi({
                method: 'post',
                url: `/v1/adoption/notices`,
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
