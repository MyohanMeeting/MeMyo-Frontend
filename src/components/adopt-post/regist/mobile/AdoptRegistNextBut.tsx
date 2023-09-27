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

  type Form = {
    [key in keyof Omit<AdoptForm, 'catPictures' | 'thumbnailId'>]: string;
  };

  let AdoptFormRequestForm: Form = {
    title: '타이틀',
    content: '설명',
    cat: '유기묘 정보',
    shelter: '입양기관 정보',
  };

  const handleRegist = useCallback(async () => {
    if (adoptPreviewImg != null && adoptPreviewImg.length === 0)
      return alert('고양이 사진을 업로드 해주세요');
    for (const [key, value] of Object.entries(AdoptFormRequestForm)) {
      const existKey = key as keyof AdoptForm;
      if (adoptForm[existKey] == null) {
        return alert(`${value}을 입력해주세요`);
      }
    }

    await thunkDispatch(setAdoptPostImg(adoptPreviewImg as File[])).then(async (result) => {
      if (result) {
        const uploadId = result.payload as catPicture[];

        await appDispatch(setAdoptForm({ thumbnailId: uploadId[0], catPictures: uploadId }));

        console.log('adoptForm 이거는 ', adoptForm);

        if (adoptForm as Required<AdoptForm>) {
          console.log('adoptForm 완성되었니', adoptForm);
          thunkDispatch(setAdoptPostThunk(adoptForm as Required<AdoptForm>));
        }
      }
    });
  }, [adoptPreviewImg, adoptForm]);

  return (
    <div className="w-full text-center flex justify-center">
      <button className="w-full bg-memyo-yellow6 p-2 text-white" onClick={handleRegist}>
        다음
      </button>
    </div>
  );
}

export default AdoptRegistNextBut;
