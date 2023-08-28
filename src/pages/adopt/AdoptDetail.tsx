
import { useParams } from 'react-router';
import AdoptDetailCard from '@components/adopt-post/AdoptDetailCard';
import { useEffect } from 'react';
import { useAppSelector, useThunkDispatch } from '@redux/hooks';
import { getAdoptDetailThunk } from '@redux/thunks/AdoptThunk';

function AdoptDetail() {
    const { noticeId } = useParams();
    const dispatch = useThunkDispatch();
    const adopt = useAppSelector((state) => state.adopt.adoptDetail);
    
  

    useEffect(() => {
      if (!noticeId) return;
        dispatch(getAdoptDetailThunk(parseInt(noticeId)));
    }, [dispatch]);

  return (
    <div className='flex flex-col'>
          {adopt && <AdoptDetailCard adopt={adopt}  />}
    </div>
  );
}

export default AdoptDetail;
