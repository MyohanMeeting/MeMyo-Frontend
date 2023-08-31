import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../../components/layout/Card';
import homePageMainImage from '../../assets/homePage/homePageMainImage.png';
import { useThunkDispatch } from '@redux/hooks';
import { getRecentPostThunk } from '@redux/thunks/HomeThunk';
import { RootState } from '@redux/store';

function HomePage() {
  const dispatch = useThunkDispatch();
  const recentPost = useSelector(
    (state: RootState) => state.persistedReducer.recentPost.recentPost
  );

  useEffect(() => {
    dispatch(getRecentPostThunk());
  }, [dispatch]);

  if (!recentPost) return null;

  return (
    <div className="mt-4">
      <div className="mb-2 text-lg md:hidden">
        <div className="flex">
          <p>안녕하세요,</p>
          <p className="font-bold">미묘</p>
          <p>님!</p>
        </div>
        <p>반려묘 찾는 것을 도와드릴게요</p>
      </div>

      <section className="flex items-center border border-memyo-yellow8 rounded-2xl md:border-0">
        <img
          className="hidden rounded-md md:block"
          src="https://t3.ftcdn.net/jpg/04/12/12/20/240_F_412122016_Oj7qQ6jaxAIsR8aCcR5nunkYwyaJhj2w.jpg"
        />
        <img className="pt-2 md:hidden" src={homePageMainImage} alt="homePageMainImage" />
        <div className="m-auto md:ml-8">
          <div>
            <h1 className="hidden text-4xl font-semibold md:block">유기묘 입양 사이트</h1>
            <div className="flex text-xl">
              <h2 className="font-bold">평생</h2>
              <h2>함께 할 가족</h2>
            </div>
            <div className="flex text-xl">
              <h2>사지말고</h2>
              <h2 className="font-bold">&nbsp;입양하세요</h2>
            </div>
          </div>
          <div className="flex mt-3 space-x-2 md:mt-12">
            <button className="w-24 h-10 text-white rounded-full bg-memyo-yellow7 md:h-24 md:text-lg md:font-semibold md:text-white md:border md:rounded-md md:w-36 md:border-memyo-yellow4 md:bg-memyo-yellow8">
              발견했어요
            </button>
            <button className="w-24 h-10 border rounded-full text-memyo-yellow7 border-memyo-yellow4 md:h-24 md:text-lg md:font-semibold md:border md:rounded-md md:text-memyo-yellow8 md:w-36 md:border-memyo-yellow8">
              찾고있어요
            </button>
          </div>
        </div>
      </section>

      <section className="my-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">최근 올라온 공고</h2>
          <Link to="/공고전체주소">
            <p className="h-6 text-center border-b md:hidden w-14 text-memyo-yellow8 border-memyo-yellow8">
              더보기
            </p>
          </Link>
        </div>
        <div className="h-60">
          <ul className="grid grid-cols-2 gap-2 my-4 md:grid-cols-4 h-70">
            {recentPost &&
              recentPost.map((item: any) => {
                return (
                  <li key={item.catId}>
                    <Card post={item} />
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="flex items-center justify-center h-40">
          <Link to="/adopt">
            <button className="hidden md:inline md:px-10 md:py-1 md:font-medium md:transition-all md:border md:rounded-md md:border-memyo-yellow4 md:hover:bg-memyo-yellow4 md:hover:text-white">
              모든 공고 보기
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
