import CatInfoCard from '@pages/mypage/components/CatInfoCard';
import { useThunkDispatch } from '@redux/hooks';
import { RootState } from '@redux/store';
import { getMyNoticeThunk } from '@redux/thunks/MyThunk';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function MyLetterTab() {
  const dispatch = useThunkDispatch();
  const myNotices = useSelector((state: RootState) => state.persistedReducer.mypage.myNotice);

  useEffect(() => {
    dispatch(getMyNoticeThunk());
  }, [dispatch]);

  return (
    <article className="flex flex-col items-center justify-center max-w-lg pt-4 space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 md:max-w-none md:place-items-center">
      {myNotices &&
        myNotices.map((item) => {
          return (
            <div key={item.noticeId} className="overflow-auto max-h-96 scrollbar-hide">
              <div className="flex flex-col items-center justify-center space-y-4">
                <Link to={`/adopt/detail/${item.noticeId}`}>
                  <CatInfoCard noticeInfo={item} />
                </Link>
              </div>
            </div>
          );
        })}
    </article>
  );
}

export default MyLetterTab;
