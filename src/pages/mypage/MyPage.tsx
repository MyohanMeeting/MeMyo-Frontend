import { Link, Outlet } from 'react-router-dom';
import kittenIcon from '../../assets/mypage/kitten.png';
import postingIcon from '../../assets/mypage/posting.png';
import userModifyingIcon from '../../assets/mypage/modifying.png';
import favoriteFriendIcon from '../../assets/mypage/favoriteCat.png';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { useThunkDispatch } from '@redux/hooks';
import { useEffect, useState } from 'react';
import { getUserInfoThunk, updateUserPasswordThunk } from '@redux/thunks/MyThunk';
import Modal from './components/modal/Modal';

function MyPage() {
  const userinfo = useSelector((state: RootState) => state.persistedReducer.mypage.userInfo);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState({
    currentPassword: '',
    newPassword: '',
  });
  const dispatch = useThunkDispatch();
  useEffect(() => {
    dispatch(getUserInfoThunk());
  }, [dispatch]);

  function openModal() {
    setIsModalOpen(!isModalOpen);
  }
  function closeModal() {
    setIsModalOpen(false);
  }
  function handleClickPasswordModify() {
    dispatch(updateUserPasswordThunk(password));
  }

  function handleChangePasswordInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setPassword((prevPassword) => ({
      ...prevPassword,
      [name]: value,
    }));
  }

  return (
    <div>
      <section className="hidden border-gray-400 md:block md:mb-6 md:border-b">
        <div className="flex items-center justify-between space-x-4">
          <h1 className="text-3xl font-semibold">MyPage</h1>
        </div>
      </section>
      <section className="h-full p-2 mb-2 space-y-4 md:flex-row md:gap-2">
        <div className="space-y-4">
          <div className="flex items-center h-32 border border-gray-400 rounded-2xl ">
            <img
              src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
              alt="profileImage"
              className="w-24 h-24 m-4 rounded-full"
            />

            <div className="flex flex-col space-y-1">
              <div className="space-y-2 text-xs">
                <div className="flex items-center">
                  <p className="font-bold text-md">{userinfo?.nickname}</p>
                  <p className="text-xs">&nbsp;님 환영합니다.</p>
                </div>
                <p className="font-bold text-md">{userinfo?.email}</p>
              </div>
              <button onClick={openModal} className="btn btn-outline btn-warning btn-xs">
                비밀번호 변경
              </button>
              <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
                <label htmlFor="currentPassword">
                  <input
                    onChange={handleChangePasswordInput}
                    name="currentPassword"
                    type="password"
                    className="h-12 bg-gray-200 w-60 rounded-2xl indent-2"
                    placeholder="현재 비밀번호"
                  />
                </label>
                <label htmlFor="newPassword">
                  <input
                    onChange={handleChangePasswordInput}
                    name="newPassword"
                    type="password"
                    className="h-12 bg-gray-200 w-60 rounded-2xl indent-2"
                    placeholder="새로운 비밀번호"
                  />
                </label>
                <button
                  onClick={handleClickPasswordModify}
                  className="h-12 btn btn-outline btn-success w-60 rounded-2xl"
                >
                  비밀번호 변경
                </button>
              </Modal>
            </div>
          </div>
          <div className="flex items-center justify-between h-32 p-2">
            <Link to="myNotice">
              <div className="flex flex-col items-center space-y-2">
                <img src={postingIcon} alt="kitten-icon" className="w-12 h-12 rounded-full" />
                <p className="text-xs font-bold">내가 올린 공고</p>
              </div>
            </Link>
            <Link to="myAdoption">
              <div className="flex flex-col items-center space-y-2">
                <img src={kittenIcon} alt="kitten-icon" className="w-12 h-12 rounded-full" />
                <p className="text-xs font-bold">내가 한 분양신청</p>
              </div>
            </Link>
            <Link to="favoriteFriend">
              <div className="flex flex-col items-center space-y-2">
                <img
                  src={favoriteFriendIcon}
                  alt="kitten-icon"
                  className="w-12 h-12 rounded-full"
                />
                <p className="text-xs font-bold">최애 친구</p>
              </div>
            </Link>
            <Link to="userInfoModifying">
              <div className="flex flex-col items-center space-y-2">
                <img src={userModifyingIcon} alt="kitten-icon" className="w-12 h-12 rounded-full" />
                <p className="text-xs font-bold">회원 정보 수정</p>
              </div>
            </Link>
          </div>
          <Outlet />
        </div>
      </section>
    </div>
  );
}
export default MyPage;
