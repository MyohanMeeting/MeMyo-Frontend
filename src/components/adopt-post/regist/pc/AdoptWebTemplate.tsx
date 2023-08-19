import AdoptPostTheme from '@components/adopt-post/regist/form/AdoptPostTheme';
import AdoptShelterForm from '@components/adopt-post/regist/form/AdoptShelterForm';
import AdoptUploadPicForm from '@components/adopt-post/regist/form/AdoptUploadPicForm';
import { useAppDispatch, useAppSelector, useThunkDispatch } from '@redux/hooks';
import { setAdoptForm } from '@redux/slice/adoptSlice';
import { AdoptDetail } from '@/types/Adopt';
import { useCallback } from 'react';
import { setAdoptPostThunk } from '@redux/thunks/AdoptThunk';

function AdoptWebTemplate() {
  const dispatch = useAppDispatch();
  const thunkDispatch = useThunkDispatch();
  const AdoptRegistState = useAppSelector((state) => state.adopt.adoptForm);
  const handleForm = useCallback((value: Partial<Omit<AdoptDetail, 'noticeId'>>) => {
    dispatch(setAdoptForm(value))
  }, [dispatch]);
  console.log('AdoptRegistState', AdoptRegistState);

  const handlePost = useCallback(() => {
    if (AdoptRegistState == null) return;
    console.log('adopt', AdoptRegistState);
    thunkDispatch(setAdoptPostThunk(AdoptRegistState!));
  },[dispatch,AdoptRegistState]); 


    return (
        <div className='flex flex-col'>
          <section className="flex flex-col w-full p-2 my-4 h-full mt-6 justify-center">
              <div className='flex justify-center'>
                <button className='w-20 flex bg-gray-100 p-1'>
                  공고 등록
                  </button>
                </div>
                <AdoptPostTheme children={<AdoptUploadPicForm/>} handleForm={handleForm} />
                <AdoptShelterForm />
                <div className='w-full text-right'>          
                <button type="submit" className="text-white bg-memyo-yellow4 hover:bg-memyo-yellow6 focus:ring-4 focus:outline-none w-full focus:ring-blue-300 font-medium rounded-lg text-sm  md:w-1/3 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handlePost}>Submit</button>
                </div>
           
             
      </section>
        
    </div>
    );
}

export default AdoptWebTemplate;

