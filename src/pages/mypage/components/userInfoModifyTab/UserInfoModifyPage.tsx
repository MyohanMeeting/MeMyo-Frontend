import { useEffect } from 'react';
import { getUserInfo } from '../../../../apis/api/mypage/getUserInfo';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../redux/configureStore';
import { getUserInfoFailure, getUserInfoSuccess } from '../../../../redux/modules/userInfo';
import UserInfoModifyInput from './userInfoModifyInput';

// 버튼 눌렀을때 수정모드 (인풋이 보여야함) 완료버튼 렌더
// 완료버튼 클릭시 api 요청
function UserInfoModifyPage() {
  const dispatch = useDispatch<AppDispatch>();
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

  return (
    <article className="flex flex-col h-screen md:max-w-md md:m-auto">
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
