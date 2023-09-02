import { useEffect } from 'react';
import { Outlet } from 'react-router';
import type { RootState } from '@redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

import NavBar from '@components/layout/NavBar';
import Footer from '@components/layout/Footer';
import { isTokenExpired } from '@/utils/jwtUtils';
import { selectCurrentToken } from '@redux/slice/authSlice';
import { refreshTokenThunk } from '@redux/thunks/AuthThunk';
// import { ToastContainer } from 'react-toastify';

function Wrapper() {
  const dispatch = useDispatch();
  const { accessToken, refreshToken } = useSelector(selectCurrentToken);

  useEffect(() => {
    if (!refreshToken || !accessToken || !isTokenExpired(accessToken)) return;
    (dispatch as ThunkDispatch<RootState, void, AnyAction>)(refreshTokenThunk(refreshToken));
  }, []);

  return (
    <div className="w-full h-full max-w-md px-3 mx-auto md:max-w-5xl font-pretendard">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Wrapper;
