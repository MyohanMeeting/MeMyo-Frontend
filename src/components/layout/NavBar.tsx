import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="flex items-center justify-between w-full py-8">
      <Link to="/" className="text-2xl font-semibold text-memyo-yellow8">
        묘한만남
      </Link>
      <ul className="flex items-center space-x-8">
        <li className="px-4 font-semibold border rounded-sm border-memyo-yellow3 text-memyo-yellow5">
          회원가입
        </li>
        <li className="px-4 font-semibold border rounded-sm border-memyo-yellow3 text-memyo-yellow5">
          로그인
        </li>
      </ul>
      <ul className="flex items-center space-x-8">
        <li className="text-lg font-semibold">입양</li>
        <li className="text-lg font-semibold">커뮤니티</li>
        <li className="text-lg font-semibold">공지사항</li>
      </ul>
    </nav>
  );
}

export default NavBar;
