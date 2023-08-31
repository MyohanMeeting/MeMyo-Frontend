import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import UserInfoModifyInput from './UserInfoModifyInput';
import { RootState } from '@redux/store';
import { useThunkDispatch } from '@redux/hooks';
import { getUserInfoThunk } from '@redux/thunks/MyThunk';

function UserInfoModifyPage() {
  const dispatch = useThunkDispatch();
  const userInfo = useSelector((state: RootState) => state.persistedReducer.mypage.userInfo);
  useEffect(() => {
    dispatch(getUserInfoThunk());
  }, [dispatch]);

  if (!userInfo) {
    return null;
  }

  return (
    <article className="flex flex-col h-screen md:max-w-md md:m-auto">
      <UserInfoModifyInput info={userInfo} />
      <div className="mt-10 text-center ">
        <button className="w-24 p-2 text-white bg-memyo-yellow7 rounded-2xl hover:bg-blue-500">
          회원탈퇴
        </button>
      </div>
    </article>
  );
}
export default UserInfoModifyPage;
