import { useState } from 'react';

interface UserInfoData {
  name: string;
  email: string;
  nickName: string;
  profileImage: string;
  phoneNumber: string;
}
function UserInfoModifyInput({ name, email, nickName, profileImage, phoneNumber }: UserInfoData) {
  const [isModifyMode, setIsModifyMode] = useState(false);
  const [userInfo, setUserInfo] = useState({ name, email, nickName, profileImage, phoneNumber });

  function handleClickModifyBtn() {
    setIsModifyMode(!isModifyMode);
  }

  function handleForm(e: React.MouseEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, id } = e.target;
    setUserInfo((prevInputs) => ({
      ...prevInputs,
      [id]: value,
    }));
  }

  return (
    <div>
      <form onClick={handleForm}>
        <label htmlFor="name">
          <div className="flex items-center justify-between mb-4 text-xs border-b border-black">
            <div className="flex">
              <p className="w-14">이름:</p>
            </div>
            <input
              onChange={handleChangeInput}
              type="text"
              className="w-full h-12 focus:outline-none"
              readOnly={!isModifyMode}
              value={userInfo.name}
              id="name"
            />
            <button onClick={handleClickModifyBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </button>
          </div>
        </label>
        <label htmlFor="nickName">
          <div className="flex items-center justify-between mb-4 text-xs border-b border-black">
            <div className="flex">
              <p className="w-14">닉네임:</p>
            </div>
            <input
              onChange={handleChangeInput}
              type="text"
              className="w-full h-12 focus:outline-none"
              readOnly={!isModifyMode}
              value={userInfo.nickName}
              id="nickName"
            />
            <button onClick={handleClickModifyBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </button>
          </div>
        </label>
        <label htmlFor="phoneNumber">
          <div className="flex items-center justify-between mb-4 text-xs border-b border-black">
            <div className="flex">
              <p className="w-14">전화번호:</p>
            </div>
            <input
              onChange={handleChangeInput}
              type="text"
              className="w-full h-12 focus:outline-none"
              readOnly={!isModifyMode}
              value={userInfo.phoneNumber}
              id="phoneNumber"
            />
            <button onClick={handleClickModifyBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </button>
          </div>
        </label>
        <label htmlFor="password">
          <div className="flex items-center justify-between mb-4 text-xs border-b border-black">
            <div className="flex">
              <p className="w-14">비밀번호:</p>
            </div>
            <input
              onChange={handleChangeInput}
              type="password"
              className="w-full h-12 focus:outline-none"
              readOnly={!isModifyMode}
              value="12341234"
              id="password"
            />
            <button onClick={handleClickModifyBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </button>
          </div>
        </label>
        <label htmlFor="email">
          <div className="flex items-center justify-between mb-8 text-xs border-b border-black">
            <div className="flex">
              <p className="w-14">이메일:</p>
            </div>
            <input
              onChange={handleChangeInput}
              type="email"
              className="w-full h-12 focus:outline-none"
              readOnly={!isModifyMode}
              value={userInfo.email}
              id="email"
            />
            <button onClick={handleClickModifyBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </button>
          </div>
        </label>
      </form>
      <div className="relative flex items-center justify-center h-48 border border-black">
        <p className="absolute text-xs top-2 left-2">프로필 이미지</p>
        <div className="relative">
          <img
            src={userInfo.profileImage}
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
