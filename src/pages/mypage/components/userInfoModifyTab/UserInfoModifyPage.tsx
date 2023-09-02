import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import UserInfoModifyInput from './UserInfoModifyInput';
import { RootState } from '@redux/store';
import { useThunkDispatch } from '@redux/hooks';
import { getUserInfo } from '@redux/slice/mypageSlice';

function UserInfoModifyPage() {
  const dispatch = useThunkDispatch();
  const userInfo = useSelector((state: RootState) => state.recentPost);
  useEffect(() => {
    dispatch(getUserInfo({}));
  }, [dispatch]);

  return (
    <article className="flex flex-col h-screen md:max-w-md md:m-auto">
      <UserInfoModifyInput />
      {Array.isArray(userInfo) &&
        userInfo.map((info) => (
          <div key={info.nickname}>
            <UserInfoModifyInput />
          </div>
        ))}
      <div className="mt-10 text-center ">
        <button className="w-24 p-2 text-white bg-memyo-yellow7 rounded-2xl hover:bg-blue-500">
          회원탈퇴
        </button>
      </div>
    </article>
  );
}
export default UserInfoModifyPage;
