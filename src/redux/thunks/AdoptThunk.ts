import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAdoptDetail, getAdoptPosts } from '../slice/adoptSlice';
import  { AxiosResponse } from 'axios'
import { searchFacet,AdoptPost, AdoptDetail, NoticeId } from '../../types/Adopt';
import { basicApi } from '../api/axiosConfig';


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
