import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="w-full flex items-center py-8">
      <Link to="/" className="text-2xl font-semibold">
        Me Myo
      </Link>
      <ul className="flex">
        <li className="border border-memyo-yellow3 font-semibold text-memyo-yellow5 px-4 rounded-sm">
          Sign up
        </li>
        <li className="border border-memyo-yellow3 font-semibold text-memyo-yellow5 px-4 rounded-sm">
          Log in
        </li>
      </ul>
      <ul className="flex items-center">
        <li className="text-lg font-semibold">Announcements</li>
        <li className="text-lg font-semibold">Map</li>
        <li className="text-lg font-semibold">About us</li>
        <li className="text-lg font-semibold">Blog</li>
      </ul>
    </nav>
  );
}

export default NavBar;
