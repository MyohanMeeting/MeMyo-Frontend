import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const pathToTitle: { [key: string]: string } = {
    '/': '묘한만남',
    '/signup': '회원가입',
    '/mypage': '마이페이지',
    '/login': '로그인',
    '/mypage/favoritemate': '최애 친구',
    '/mypage/myletter': '내가 쓴 글',
    '/mypage/adoptionhandle': '입양 관리',
  };
  const location = useLocation();
  const pathName = pathToTitle[location.pathname] || '묘한만남';
  return (
    <>
      <nav className="flex items-center justify-between py-6 md:hidden">
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
        <h1 className="text-3xl font-semibold text-memyo-yellow9">{pathName}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          className="w-12 h-8 text-memyo-yellow8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </nav>
      <div className="hidden md:block">
        <nav className="flex items-center justify-between w-full py-8">
          <Link to="/" className="text-2xl font-semibold text-memyo-yellow8">
            묘한만남
          </Link>
          <ul className="flex items-center space-x-4">
            <li className="px-4 border rounded-sm border-memyo-yellow3 text-memyo-yellow5">
              Signup
            </li>
            <li className="px-4 border rounded-sm border-memyo-yellow3 text-memyo-yellow5">
              Signin
            </li>
          </ul>
          <ul className="flex items-center space-x-8">
            <li className="text-lg font-semibold">입양</li>
            <li className="text-lg font-semibold">커뮤니티</li>
            <li className="text-lg font-semibold">공지사항</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
