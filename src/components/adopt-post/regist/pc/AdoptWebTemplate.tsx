import AdoptPostTheme from '@components/adopt-post/regist/form/AdoptPostTheme';
import AdoptShelterForm from '@components/adopt-post/regist/form/AdoptShelterForm';
import AdoptUploadPicForm from '@components/adopt-post/regist/form/AdoptUploadPicForm';
import { useAppSelector } from '@redux/hooks';
import { Cat, Shelter } from '@/types/Adopt';
import { useMemo } from 'react';
import AdoptRegistNextBut from '../mobile/AdoptRegistNextBut';



function AdoptWebTemplate() {

  const adoptForm = useAppSelector((state) => state.adopt.adoptForm);
  const adoptRegistState = useMemo(() => adoptForm, [adoptForm]);

  const cat = useMemo(() => adoptRegistState.cat, [adoptRegistState.cat]);

  const shelter = useMemo(() => adoptRegistState.shelter, [adoptRegistState.shelter]);
  const { title, content } = useMemo(() => ({ title: adoptRegistState.title, content: adoptRegistState.content }), [adoptRegistState.title,adoptRegistState.content]);
  


  return (
        <div className='flex flex-col'>
          <section className="flex flex-col w-full p-2 my-4 h-full mt-6 justify-center">
              <div className='flex justify-center'>
                <p className='w-20 flex bg-gray-100 p-1 text-sm justify-center font-pretendard'>
                  공고 등록
                  </p>
                </div>
                <AdoptPostTheme title={title as string} content={content as string} />
                <AdoptUploadPicForm cat={cat as Partial<Cat>}  />
                <AdoptShelterForm shelter={shelter as Partial<Shelter>}  />
                <AdoptRegistNextBut/>
        </section>        
        </div>
    );
}

export default AdoptWebTemplate;

