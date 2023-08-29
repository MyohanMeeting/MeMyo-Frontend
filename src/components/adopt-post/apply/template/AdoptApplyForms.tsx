import AdoptApplyUser from '@components/adopt-post/apply/form/AdoptApplyUser';
import AdoptApplyCheck from '@components/adopt-post/apply/form/AdoptApplyCheck';
import AdoptAgreePromise from '@components/adopt-post/apply/form/AdoptAgreePromise';
import { useParams } from 'react-router';
import { useAppSelector, useThunkDispatch } from '@redux/hooks';
import { useEffect, useMemo } from 'react';
import { getAdoptDetailThunk } from '@redux/thunks/AdoptThunk';
import { ApplyUser, Survey } from '@/types/Adopt';
function AdoptApplyForms() {
    const { noticeId } = useParams();
    const dispatch = useThunkDispatch();

    const adopt = useAppSelector((state) => state.adopt.adoptDetail);
    const adoptCatName = useMemo(() => adopt?.cat.name, [adopt]);
    
    const adoptApply = useAppSelector((state) => state.adopt.adoptApply);
    const adoptApplyRegist = useMemo(() => adoptApply, [adoptApply]);

    const applicant = useMemo(() => adoptApplyRegist?.applicant, [adoptApplyRegist?.applicant]);
    const survey = useMemo(() => adoptApplyRegist?.survey, [adoptApplyRegist?.survey]);
    const content = useMemo(() => adoptApplyRegist?.content, [adoptApplyRegist?.content]);


    useEffect(() => {
      if (!noticeId) return;
        dispatch(getAdoptDetailThunk(parseInt(noticeId)));
    }, [dispatch]);

    return (
    <div className='w-full h-full flex justify-center bg-white drop-shadow-lg'>
            <div className='w-11/12 h-5/6 flex flex-col justify-center'>
                <label htmlFor="title" className="block mt-2 py-2 text-gray-700 w-full mb-2">입양할 유기동물의 이름</label>
                <input id="title" className="border-b appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" value={adoptCatName || ''} readOnly />
                <AdoptApplyUser applicant={applicant as Partial<ApplyUser>} />
                <AdoptApplyCheck survey={survey as Partial<Survey>} />
                <AdoptAgreePromise />
            </div>
     </div> 
    );
}
export default AdoptApplyForms;
