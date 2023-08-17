import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAdoptPosts } from '../slice/adoptSlice';
import axios from 'axios'


const getAdoptPostThunk = createAsyncThunk(
    'adopt/getAdoptPosts',
    async (facet: any, thunkApi) => {
        try {
            await axios({
                method: 'get',
                url: '/v1/adoption/notices',
                headers: { 'withCredentials': true},
                params:{...facet}
            }).then(result => {
                const { data } = result.data;
                console.log('result', data)
                if (data) {
                thunkApi.dispatch(getAdoptPosts(data));
                }
                
            });
        } catch(error) {
            console.log('error',error);
        }
    
    
    }

)

export default getAdoptPostThunk;