import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../../pages/home/components/Sidebar';

export interface SidebarProps {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}
function NavBar() {
  let navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between py-6 md:hidden">
        <button onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="w-12 h-8 text-memyo-yellow8"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <Link to="/">
          <h1 className="text-3xl font-semibold text-memyo-yellow9">묘한만남</h1>
        </Link>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </nav>
      <div className="hidden px-2 shadow-sm md:block">
        <nav className="flex items-center justify-between w-full py-8">
          <Link to="/" className="text-2xl font-semibold text-memyo-yellow8">
            묘한만남
          </Link>
          <ul className="flex items-center space-x-4">
            <li className="px-4 border rounded-sm border-memyo-yellow3 text-memyo-yellow5">
              <Link to="/signup">회원가입</Link>
            </li>
            <li className="px-4 border rounded-sm border-memyo-yellow3 text-memyo-yellow5">
              <Link to="/login">로그인</Link>
            </li>
          </ul>
          <ul className="flex items-center space-x-8">
            <li className="text-lg font-semibold">
              <Link to="/adopt">입양</Link>
            </li>
            <Link to="/adopt/register">
              <li className="text-lg font-semibold">신청서 작성</li>
            </Link>

            <Link to="/mypage">
              <li className="text-lg font-semibold">마이페이지</li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
