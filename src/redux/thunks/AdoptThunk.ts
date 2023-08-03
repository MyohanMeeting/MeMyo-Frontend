import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAdoptPosts } from '../slice/adoptSlice';
import axios from 'axios'


const getAdoptPostThunk = createAsyncThunk(
    'adopt/getAdoptPosts',
    async (facet: any, thunkApi) => {
        console.log('facek',facet)
        try {
            const data = await axios({
                method: 'get',
                url: '/v1/adoption/notices',
                params:{...facet}
            }).then(result => {
                console.log('result', result)
                return result
            });
            console.log('data',data)

            if (data) {
                thunkApi.dispatch(getAdoptPosts(data));
            }
        } catch(error) {
            console.log('error',error);
        }
    
    
    }

)

export default getAdoptPostThunk;