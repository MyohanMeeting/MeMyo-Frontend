import { Outlet } from 'react-router';

function NavbarWrapper() {
  return (
    <div className="w-full max-w-7xl h-full mx-auto">
      <nav>navbar</nav>
      <Outlet />
    </div>
  );
}

export default NavbarWrapper;
