import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import type { RootState } from '@redux/store';
import { useDispatch, useSelector } from 'react-redux';
// import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

import Sidebar from '../../pages/home/components/Sidebar';
// import { signoutThunk } from '@redux/thunks/AuthThunk';
import { removeAuth, selectCurrentUser } from '@redux/slice/authSlice';

export interface SidebarProps {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}
function NavBar() {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  // const { accessToken } = useSelector(selectCurrentToken);

  const handleSignout = () => {
    dispatch(removeAuth());
  };

  const pathToTitle: { [key: string]: string } = {
    '/': '묘한만남',
    '/signup': '회원가입',
    '/mypage': '마이페이지',
    '/login': '로그인',
    '/mypage/favoritemate': '최애 친구',
    '/mypage/myletter': '내가 쓴 글',
    '/mypage/adoptionhandle': '입양 관리',
    '/mypage/userinfomodifying': '회원정보 수정',
  };
  const location = useLocation();
  const pathName = pathToTitle[location.pathname] || '묘한만남';
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between py-6 md:hidden">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-12 h-8 text-memyo-yellow8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </Link>
        <h1 className="text-3xl font-semibold text-memyo-yellow9">{pathName}</h1>

        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </nav>
      <div className="hidden px-6 shadow-sm md:block">
        <nav className="flex items-center justify-between w-full py-8">
          <Link to="/" className="text-2xl font-semibold text-memyo-yellow8">
            묘한만남
          </Link>
          {user ? (
            <div className="flex items-center gap-x-2">
              <img
                src={user.profileImageUrl}
                className=" border border-gray-200 rounded-full w-10 h-10"
              />
              <p>
                <span className="font-medium">{user.nickName}</span>님 안녕하세요
              </p>
              <button
                onClick={handleSignout}
                className="px-1 rounded-sm text-sm bg-opacity-20 hover:bg-opacity-40 transition-colors bg-memyo-yellow10"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <ul className="flex items-center space-x-4">
              <li className="px-4 border rounded-sm transition-colors border-memyo-yellow3 text-memyo-yellow5 hover:bg-memyo-yellow3 hover:text-white">
                <Link to="/signup">회원가입</Link>
              </li>
              <li className="px-4 border rounded-sm transition-colors border-memyo-yellow3 text-memyo-yellow5 hover:bg-memyo-yellow3 hover:text-white">
                <Link to="/login">로그인</Link>
              </li>
            </ul>
          )}
          <ul className="flex items-center space-x-8">
            <li className="text-lg font-semibold hover:text-memyo-yellow3 transition-colors">
              <Link to="/adopt">입양</Link>
            </li>
            <li className="text-lg font-semibold hover:text-memyo-yellow3 transition-colors">
              <Link to="/adopt/register">신청서 작성</Link>
            </li>
            <li className="text-lg font-semibold hover:text-memyo-yellow3 transition-colors">
              <Link to="/mypage">마이페이지</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
