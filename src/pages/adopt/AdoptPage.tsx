import { useAppSelector, useThunkDispatch } from '@redux/hooks';
import AdoptSearchFacet from '@components/adopt-post/AdoptSearchFacet';
import { useCallback, useEffect } from 'react';
import { getAdoptPostThunk } from '@redux/thunks/AdoptThunk';
import AdoptCard from '@components/adopt-post/AdoptCard';
import AdoptMobileFacet from '@components/adopt-post/AdoptMobileFacet';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function AdoptPage() {
  const AdoptPosts = useAppSelector((state) => state.persistedReducer.adopt.adoptPosts);
  const dispatch = useThunkDispatch();

  const [mobileBut, setMobileBut] = useState(false);
  const handleMobile = useCallback(() => setMobileBut((prev) => !prev), []);

  useEffect(() => {
    dispatch(getAdoptPostThunk({}));
  }, [dispatch]);

  if (!AdoptPosts) return null;

  return (
    <>
      <div className="flex items-center justify-between p-2">
        <h2 className="text-xl font-semibold">입양 공고</h2>
        <div className="grid grid-cols-1">
          <Link
            to="/adopt/register"
            className="hidden w-24 p-2 text-sm text-center text-white border-b md:block bg-memyo-yellow8 hover:bg-memyo-yellow9 border-memyo-yellow8"
          >
            공고 올리기
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-none md:flex-row">
        <div className="block w-full md:hidden">
          <button
            className="float-right w-40 h-10 mr-2 text-white border rounded-md border-memyo-yellow5 bg-memyo-yellow5"
            onClick={handleMobile}
          >
            검색필터
          </button>
        </div>
        <AdoptMobileFacet mobileBut={mobileBut} handleMobile={handleMobile} />
        <AdoptSearchFacet />

        <section className="flex flex-wrap w-full p-2 md:w-2/3">
          <ul className="grid grid-cols-2 gap-3 my-4 md:grid-cols-3 h-72">
            {AdoptPosts.map((adopt) => (
              <AdoptCard key={adopt.noticeId} adopt={adopt} />
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export default AdoptPage;
