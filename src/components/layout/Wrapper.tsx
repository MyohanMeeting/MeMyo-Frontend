import { Outlet } from 'react-router';
import NavBar from './NavBar';
import Footer from './Footer';

function Wrapper() {
  return (
    <div className="w-full h-full max-w-md px-3 mx-auto md:max-w-5xl">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Wrapper;
