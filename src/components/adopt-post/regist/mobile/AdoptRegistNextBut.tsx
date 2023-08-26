import { AdoptPostContext } from '@/context/AdoptFormContext';
import { useAppDispatch, useAppSelector, useThunkDispatch } from '@redux/hooks';
import { setAdoptForm } from '@redux/slice/adoptSlice';
import { setAdoptPostImg, setAdoptPostThunk } from '@redux/thunks/AdoptThunk';
import { AdoptForm, catPicture } from '@/types/Adopt';
import { useCallback, useContext } from 'react';

function AdoptRegistNextBut() {
    const { adoptPreviewImg } = useContext(AdoptPostContext);
    
    const adoptForm = useAppSelector((state) => state.adopt.adoptForm);

    const appDispatch = useAppDispatch();
    const thunkDispatch = useThunkDispatch();
    
    const handleRegist = useCallback(async () => {
        console.log('adopt',adoptPreviewImg)
        await thunkDispatch(setAdoptPostImg(adoptPreviewImg as File[])).then((result) => {
            if (result) {
                
                console.log('result', result);

                const {uploadId} = result.payload as {uploadId:catPicture[]}
                appDispatch(setAdoptForm({ thumbnailId: uploadId[0], catPictures: uploadId }));
                thunkDispatch(setAdoptPostThunk(adoptForm as Required<AdoptForm>));
            }
        })
        
    },[adoptPreviewImg])

    return (
         <div className='w-full text-center flex justify-center'>    
            <button className='w-full bg-memyo-yellow6 p-2 text-white' onClick={handleRegist}>다음</button>
         </div>
    );
}

export default AdoptRegistNextBut;

