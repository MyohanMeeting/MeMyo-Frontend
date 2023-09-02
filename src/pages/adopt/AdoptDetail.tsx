import { useParams } from 'react-router';
import { Suspense, lazy, useEffect } from 'react';
import { useAppSelector, useThunkDispatch } from '@redux/hooks';
import { getAdoptDetailThunk } from '@redux/thunks/AdoptThunk';
import Loading from '@components/loading/Loading';

function AdoptDetail() {
    const { noticeId } = useParams();
    const dispatch = useThunkDispatch();
    const adopt = useAppSelector((state) => state.adopt.adoptDetail);
    
    const delayForDemo = (promise:any) => {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    }).then(() => promise);
}
  
  
    const AdoptCardsDetail = lazy(()=>delayForDemo(import('@components/adopt-post/AdoptDetailCard')))

    useEffect(() => {
      if (!noticeId) return;
        dispatch(getAdoptDetailThunk(parseInt(noticeId)));
    }, [dispatch]);

  return (
    <div className='flex flex-col'>
      {adopt && (

        <Suspense fallback={
          <Loading />}>
          <AdoptCardsDetail adopt={adopt} />
        </Suspense>)}
    </div>
  );
}

export default AdoptDetail;