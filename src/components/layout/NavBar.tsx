import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from '@redux/slice/authSlice';

function NavBar() {
  const user = useSelector(selectCurrentUser);

  return (
    <>
      <nav className="flex items-center justify-between py-6 md:hidden shadow-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-12 h-8 text-memyo-yellow8"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        <h1 className="text-3xl font-semibold text-memyo-yellow9">
          <Link to="/">묘한만남</Link>
        </h1>
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
            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </nav>
      <div className="hidden md:block shadow-sm px-2">
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
                onClick={() => {}}
                className="px-1 rounded-sm text-sm bg-opacity-20 hover:bg-opacity-40 transition-colors bg-memyo-yellow10"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <ul className="flex items-center space-x-4">
              <li className="px-4 border rounded-sm border-memyo-yellow3 text-memyo-yellow5">
                <Link to="/signup">회원가입</Link>
              </li>
              <li className="px-4 border rounded-sm border-memyo-yellow3 text-memyo-yellow5">
                <Link to="/login">로그인</Link>
              </li>
            </ul>
          )}
          <ul className="flex items-center space-x-8">
            <li className="text-lg font-semibold">
              <Link to="/adopt">입양</Link>
            </li>
            <li className="text-lg font-semibold">공지사항</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
