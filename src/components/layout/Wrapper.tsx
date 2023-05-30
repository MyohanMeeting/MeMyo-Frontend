import { Outlet } from 'react-router';
import NavBar from './NavBar';
import Footer from './Footer';

function Wrapper() {
  return (
    <div className="w-full max-w-5xl h-full mx-auto px-3">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Wrapper;
