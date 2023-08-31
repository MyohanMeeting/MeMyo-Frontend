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
    <article className="max-w-lg max-h-screen pt-4 m-auto space-y-4 overflow-scroll md:space-y-0 md:grid md:grid-cols-2 md:gap-4 md:max-w-none md:place-items-center scrollbar-hide">
      {myNotices &&
        myNotices.map((item) => {
          return (
            <div key={item.noticeId}>
              <Link to={`/adopt/detail/${item.noticeId}`}>
                <CatInfoCard noticeInfo={item} />
              </Link>
            </div>
          );
        })}
    </article>
  );
}

export default MyLetterTab;
