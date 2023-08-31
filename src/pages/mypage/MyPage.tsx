import { Link, Outlet } from 'react-router-dom';
import kittenIcon from '../../assets/mypage/kitten.png';
import postingIcon from '../../assets/mypage/posting.png';
import userModifyingIcon from '../../assets/mypage/modifying.png';
import favoriteFriendIcon from '../../assets/mypage/favoriteCat.png';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { useThunkDispatch } from '@redux/hooks';
import { useEffect } from 'react';
import { getUserInfoThunk } from '@redux/thunks/MyThunk';

function MyPage() {
  const userinfo = useSelector((state: RootState) => state.persistedReducer.mypage.userInfo);
  const dispatch = useThunkDispatch();
  useEffect(() => {
    dispatch(getUserInfoThunk());
  }, [dispatch]);

  return (
    <div>
      <section className="hidden border-gray-400 md:block md:mb-6 md:border-b">
        <div className="flex items-center justify-between space-x-4">
          <h1 className="text-3xl font-semibold">MyPage</h1>
        </div>
      </section>
      <section className="h-full p-2 mb-2 space-y-4 md:flex-row md:gap-2">
        <div className="space-y-4">
          <div className="flex items-center h-32 border border-gray-400 rounded-2xl">
            <img
              src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
              alt="profileImage"
              className="w-24 h-24 m-4 rounded-full"
            />
            <div className="space-y-2 text-xs">
              <div className="flex items-center">
                <p className="font-bold text-md">{userinfo?.nickname}</p>
                <p className="text-xs">&nbsp;님 환영합니다.</p>
              </div>
              <p className="font-bold text-md">{userinfo?.email}</p>
            </div>
          </div>
          <div className="flex items-center justify-between h-32 p-2">
            <Link to="myNotice">
              <div className="flex flex-col items-center space-y-2">
                <img src={postingIcon} alt="kitten-icon" className="w-12 h-12 rounded-full" />
                <p className="text-xs font-bold">내가 올린 공고</p>
              </div>
            </Link>
            <Link to="myAdoption">
              <div className="flex flex-col items-center space-y-2">
                <img src={kittenIcon} alt="kitten-icon" className="w-12 h-12 rounded-full" />
                <p className="text-xs font-bold">내가 한 분양신청</p>
              </div>
            </Link>
            <Link to="favoriteFriend">
              <div className="flex flex-col items-center space-y-2">
                <img
                  src={favoriteFriendIcon}
                  alt="kitten-icon"
                  className="w-12 h-12 rounded-full"
                />
                <p className="text-xs font-bold">최애 친구</p>
              </div>
            </Link>
            <Link to="userInfoModifying">
              <div className="flex flex-col items-center space-y-2">
                <img src={userModifyingIcon} alt="kitten-icon" className="w-12 h-12 rounded-full" />
                <p className="text-xs font-bold">회원 정보 수정</p>
              </div>
            </Link>
          </div>
          <Outlet />
        </div>
      </section>
    </div>
  );
}
export default MyPage;
