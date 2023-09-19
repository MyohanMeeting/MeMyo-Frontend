import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import UserInfoModifyInput from './UserInfoModifyInput';
import { RootState } from '@redux/store';
import { useThunkDispatch } from '@redux/hooks';
import { deleteUserThunk, getUserInfoThunk } from '@redux/thunks/MyThunk';

function UserInfoModifyPage() {
  const dispatch = useThunkDispatch();
  const userInfo = useSelector((state: RootState) => state.mypage.userInfo);
  useEffect(() => {
    dispatch(getUserInfoThunk());
  }, [dispatch]);

  function handleClickDeleteUser() {
    if (window.confirm('확인 버튼을 누르시면 정말로 회원 정보가 삭제됩니다!')) {
      // confirm창 modal로 변경 예정
      dispatch(deleteUserThunk());
    }
  }

  if (!userInfo) {
    return null;
  }

  return (
    <article className="flex flex-col h-screen md:max-w-md md:m-auto">
      <UserInfoModifyInput info={userInfo} />
      <div className="mt-10 text-center ">
        <button onClick={handleClickDeleteUser} className="btn btn-outline btn-error">
          회원 탈퇴하기
        </button>
      </div>
    </article>
  );
}
export default UserInfoModifyPage;
