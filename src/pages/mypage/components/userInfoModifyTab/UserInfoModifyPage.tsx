import { useEffect } from 'react';
import { getUserInfo } from '../../../../apis/api/mypage/getUserInfo';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../redux/configureStore';
import { getUserInfoFailure, getUserInfoSuccess } from '../../../../redux/modules/userInfo';
import UserInfoModifyInput from './userInfoModifyInput';

function UserInfoModifyPage() {
  const dispatch = useDispatch<AppDispatch>(); // action 함수 사용을 위함.
  const userInfo = useSelector((state: RootState) => state.userInfo.userInfo);

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

  console.log(userInfo);

  return (
    <article className="flex flex-col h-screen m-6">
      {userInfo.map(({ memberId, name, email, nickName, profileImage, phoneNumber }) => (
        <div key={memberId}>
          <UserInfoModifyInput
            name={name}
            email={email}
            nickName={nickName}
            profileImage={profileImage}
            phoneNumber={phoneNumber}
          />
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
