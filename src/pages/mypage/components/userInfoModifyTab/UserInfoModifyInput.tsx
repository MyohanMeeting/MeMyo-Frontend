import React, { useEffect, useRef, useState } from 'react';
import { UserInfo } from '../../../../types/Mypage';
import { useThunkDispatch } from '@redux/hooks';
import {
  postImageToServerThunk,
  updateUserInfoThunk,
  updateUserProfile,
} from '@redux/thunks/MyThunk';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';

export interface userInfoProps {
  info: UserInfo;
}
function UserInfoModifyInput({ info }: userInfoProps) {
  const thunkDispatch = useThunkDispatch();
  const newUserProfileId = useSelector((state: RootState) => state.mypage.newUserProfileId);
  const [isModifyMode, setIsModifyMode] = useState(false);
  const [updatedUserInfo, setUpdatedUserInfo] = useState({
    nickname: info.nickname,
    phoneNumber: info.phoneNumber,
    profileImageId: newUserProfileId,
  });
  const [image, setImage] = useState({
    image_file: '',
    preview_URL: info.profileImage,
  });
  const [imageFile, setImageFile] = useState([]);

  let inputRef = useRef<HTMLInputElement | null>(null);

  function saveImage(e: any) {
    e.preventDefault();
    if (e.target.files) {
      URL.revokeObjectURL(image.preview_URL);
      setImageFile(e.target.files);
      const preview_URL = URL.createObjectURL(e.target.files[0]);
      setImage(() => ({
        image_file: e.target.files[0],
        preview_URL: preview_URL,
      }));
    }
  }

  function deleteImage() {
    URL.revokeObjectURL(image.preview_URL);
    setImage({
      image_file: '',
      preview_URL: info.profileImage,
    });
  }

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(image.preview_URL);
    };
  }, []);

  async function sendImageToServer() {
    if (image.image_file) {
      await thunkDispatch(postImageToServerThunk(imageFile));
      await thunkDispatch(updateUserProfile(newUserProfileId as number));
    } else {
      toast('사진을 등록하세요!');
    }
  }

  function handleForm(e: React.MouseEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function handleClickModifyBtn() {
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
                <button
                  className="btn btn-circle btn-xs btn-outline btn-warning"
                  onClick={() => setIsModifyMode(false)}
                >
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
      </form>
      <div className="relative flex items-center justify-center border border-black h-72">
        <p className="absolute text-xs top-2 left-2">프로필 이미지</p>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 ">
          <div className="relative flex flex-col items-center justify-center p-2 w-52 h-52">
            <img
              src={image.preview_URL}
              alt="previewProfileImage"
              className="object-cover w-full h-full"
            />
            <button className="absolute bottom-1 right-4" onClick={() => inputRef.current?.click()}>
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
          <div>
            {image.image_file ? (
              <div>
                <button onClick={deleteImage} className="btn btn-xs btn-outline btn-secondary">
                  취소하기
                </button>
                <button onClick={sendImageToServer} className="btn btn-xs btn-outline btn-accent">
                  수정하기
                </button>
              </div>
            ) : null}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={saveImage}
            onClick={() => {
              if (inputRef.current) {
                inputRef.current.value = null as any;
              }
            }}
            ref={(refParam: HTMLInputElement | null) => (inputRef.current = refParam)}
            style={{ display: 'none' }}
          />
        </div>
      </div>
    </div>
  );
}

export default UserInfoModifyInput;
