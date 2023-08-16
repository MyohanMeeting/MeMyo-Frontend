import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../redux/configureStore';
import { setUserCurrentPassword, setUserNewPassword } from '../../../../redux/modules/userInfo';
import Modal from '../modal/Modal';
import { putUserPassword } from '../../../../apis/api/mypage/putUserPassword';

function UserInfoModifyInput() {
  const patchedUserInfo = useSelector((state: RootState) => state.userInfo.patchUserInfo);
  const currentPassword = useSelector((state: RootState) => state.userInfo.currentPassword);
  const newPassword = useSelector((state: RootState) => state.userInfo.newPassword);
  const dispatch = useDispatch<AppDispatch>();
  const [isEmailModifyMode, setIsEmailModifyMode] = useState(false);
  const [isPasswordModifyMode, setIsPasswordModifyMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleChangeCurrentPwInput(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setUserCurrentPassword(e.target.value));
  }

  function handleChangeNewPwInput(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setUserNewPassword(e.target.value));
  }

  function handleModalClose() {
    setIsModalOpen(false);
  }

  function handleModalOpen() {
    setIsModalOpen(true);
  }

  function handleForm(e: React.MouseEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function handleClickPasswordModifyBtn() {
    useEffect(() => {
      async function modifyUserPassword() {
        const putUserPasswordRequest = { currentPassword, newPassword };
        try {
          const res = await putUserPassword(putUserPasswordRequest);
          if (res.status === 200) {
            alert('비밀번호를 수정했습니다.');
          }
        } catch (e) {
          alert('비밀번호를 변경하지 못했습니다.');
        }
      }
      modifyUserPassword();
    }, []);
  }

  return (
    <div>
      <form onClick={handleForm}>
        <label htmlFor="nickname">
          <div className="flex items-center justify-between mb-4 text-xs border-b border-black">
            <div className="flex">
              <p className="w-14">이름:</p>
            </div>
            <input
              type="text"
              className="w-full h-12 focus:outline-none"
              readOnly
              value={patchedUserInfo?.member.nickname || ''}
              id="nickname"
            />
          </div>
        </label>
        <label htmlFor="nickName">
          <div className="flex items-center justify-between mb-4 text-xs border-b border-black">
            <div className="flex">
              <p className="w-14">닉네임:</p>
            </div>
            <input
              type="text"
              className="w-full h-12 focus:outline-none"
              readOnly
              value={patchedUserInfo?.member.nickname || ''}
              id="nickName"
            />
          </div>
        </label>
        <label htmlFor="phoneNumber">
          <div className="flex items-center justify-between mb-4 text-xs border-b border-black">
            <div className="flex">
              <p className="w-14">전화번호:</p>
            </div>
            <input
              type="text"
              className="w-full h-12 focus:outline-none"
              readOnly
              value={patchedUserInfo?.member.phoneNumber || ''}
              id="phoneNumber"
            />
          </div>
        </label>
        <label htmlFor="password">
          <div className="flex items-center justify-between mb-4 text-xs border-b border-black">
            <div className="flex">
              <p className="w-14">비밀번호:</p>
            </div>
            <input
              type="password"
              className="w-full h-12 focus:outline-none"
              readOnly={!isPasswordModifyMode}
              value="12341234"
              id="password"
            />
            <div className="w-28 p-1 bg-memyo-yellow6 rounded-lg text-center">
              <button onClick={handleModalOpen}>비밀번호 변경</button>
            </div>
          </div>
          <Modal isModalOpen={isModalOpen} closeModal={handleModalClose}>
            <label htmlFor="currentPassword">
              <input
                type="password"
                className="border border-memyo-yellow6 rounded-lg indent-1"
                placeholder="현재 비밀번호"
                value={currentPassword}
                onChange={handleChangeCurrentPwInput}
              />
            </label>
            <label htmlFor="newPassword">
              <input
                type="password"
                className="border border-memyo-yellow6 rounded-lg indent-1"
                placeholder="새로운 비밀번호"
                value={newPassword}
                onChange={handleChangeNewPwInput}
              />
            </label>
            <button
              onClick={handleClickPasswordModifyBtn}
              className="bg-memyo-yellow6 text-white rounded-lg p-1"
            >
              비밀번호 변경
            </button>
          </Modal>
        </label>
        <label htmlFor="email">
          <div className="flex items-center justify-between mb-8 text-xs border-b border-black">
            <div className="flex">
              <p className="w-14">이메일:</p>
            </div>
            <input
              type="email"
              className="w-full h-12 focus:outline-none"
              readOnly={!isEmailModifyMode}
              value="test1@gmail.com"
              id="email"
            />
          </div>
        </label>
      </form>
      <div className="relative flex items-center justify-center h-48 border border-black">
        <p className="absolute text-xs top-2 left-2">프로필 이미지</p>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            alt="modifyPageProfileImage"
            className="w-32 h-32 rounded-full"
          />
          <button className="absolute bottom-1 right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 -5 25 35"
              stroke-width="2.0"
              stroke="currentColor"
              className="w-6 h-6 border border-black rounded-full bg-memyo-yellow6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserInfoModifyInput;
