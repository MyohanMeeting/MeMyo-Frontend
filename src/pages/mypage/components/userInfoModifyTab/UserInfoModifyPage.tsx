import { useEffect } from 'react';
import { getUserInfo } from '../../../../apis/api/mypage/getUserInfo';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../redux/configureStore';
import { getUserInfoFailure, getUserInfoSuccess } from '../../../../redux/modules/userInfo';
import { deleteUser } from '../../../../apis/api/mypage/deleteUser';
import UserInfoModifyInput from './UserInfoModifyInput';

function UserInfoModifyPage() {
  const dispatch = useDispatch<AppDispatch>();
  const userInfo = useSelector((state: RootState) => state.userInfo.getUserInfo);

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const res = await getUserInfo();
        if (res.status === 200) {
          dispatch(getUserInfoSuccess(res.data));
        }
      } catch (e) {
        dispatch(getUserInfoFailure('error'));
      }
    }
    fetchUserInfo();
  }, [dispatch]);

  async function handleClickDeleteBtn() {
    const res = await deleteUser();
    if (res.status === 200) {
      alert('회원탈퇴되었습니다.');
    }
  }

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
        <button
          onClick={handleClickDeleteBtn}
          className="w-24 p-2 text-white bg-memyo-yellow7 rounded-2xl hover:bg-blue-500"
        >
          회원탈퇴
        </button>
      </div>
    </article>
  );
}
export default UserInfoModifyPage;
