import React, { useState } from 'react';
import Modal from '../modal/Modal';
import { UserInfo } from '../../../../types/Mypage';
import { useThunkDispatch } from '@redux/hooks';
import { updateUserInfoThunk } from '@redux/thunks/MyThunk';

export interface userInfoProps {
  info: UserInfo;
}
function UserInfoModifyInput({ info }: userInfoProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModifyMode, setIsModifyMode] = useState(false);
  const [updatedUserInfo, setUpdatedUserInfo] = useState({
    nickname: info.nickname,
    phoneNumber: info.phoneNumber,
  });

  const thunkDispatch = useThunkDispatch();

  function handleModalClose() {
    setIsModalOpen(false);
  }

  function handleModalOpen() {
    setIsModalOpen(true);
  }

  function handleForm(e: React.MouseEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function handleClickModifyBtn(e: React.MouseEvent<HTMLButtonElement>) {
    setIsModifyMode(!isModifyMode);
    if (isModifyMode) {
      thunkDispatch(updateUserInfoThunk(updatedUserInfo));
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setUpdatedUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  }

  console.log(updatedUserInfo);
  return (
    <div>
      <form onClick={handleForm}>
        <label htmlFor="nickname">
          <div className="flex items-center justify-between mb-4 text-xs border-b border-black">
            <div className="flex">
              <p className="w-14">닉네임:</p>
            </div>
            <input
              onChange={handleInputChange}
              type="text"
              className="w-full h-12 focus:outline-none"
              readOnly={!isModifyMode}
              value={updatedUserInfo.nickname}
              name="nickname"
            />
            {isModifyMode ? (
              <div className="flex items-center">
                <button
                  className="btn btn-outline btn-warning btn-xs"
                  onClick={handleClickModifyBtn}
                >
                  수정완료
                </button>
                <button className="btn btn-circle btn-xs btn-outline btn-warning">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <button className="btn btn-outline btn-warning btn-xs" onClick={handleClickModifyBtn}>
                수정하기
              </button>
            )}
          </div>
        </label>
        <label htmlFor="phoneNumber">
          <div className="flex items-center justify-between mb-4 text-xs border-b border-black">
            <div className="flex">
              <p className="w-14">전화번호:</p>
            </div>
            <input
              onChange={handleInputChange}
              type="text"
              className="w-full h-12 focus:outline-none"
              readOnly
              value={info.phoneNumber}
              name="phoneNumber"
            />
            <button className="btn btn-outline btn-warning btn-xs">수정하기</button>
          </div>
        </label>
        <label htmlFor="password">
          <Modal isModalOpen={isModalOpen} closeModal={handleModalClose}>
            <label htmlFor="currentPassword">
              <input
                type="password"
                className="border rounded-lg border-memyo-yellow6 indent-1"
                placeholder="현재 비밀번호"
                value=""
              />
            </label>
            <label htmlFor="newPassword">
              <input
                type="password"
                className="border rounded-lg border-memyo-yellow6 indent-1"
                placeholder="새로운 비밀번호"
                value=""
              />
            </label>
            <button className="p-1 text-white rounded-lg bg-memyo-yellow6">비밀번호 변경</button>
          </Modal>
        </label>
      </form>
      <div className="relative flex items-center justify-center h-48 border border-black">
        <p className="absolute text-xs top-2 left-2">프로필 이미지</p>
        <div className="relative">
          <img
            src={info.profileImage}
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
