import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/home/HomePage';
import Wrapper from '../components/layout/Wrapper';
import LoginPage from '../pages/login/LoginPage';
import SignupPage from '../pages/signup/SignupPage';
import MyPage from '../pages/mypage/MyPage';
import FavoriteTab from '../pages/mypage/components/favoriteTab/FavoriteTab';
import MyLetterTab from '../pages/mypage/components/myLetterTab/MyLetterTab';
import AdoptionHandleTab from '../pages/mypage/components/adoptionHandleTab/AdoptionHandleTab';
import UserInfoModifyPage from '../pages/mypage/components/UserInfoModifyPage';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route path="" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="mypage" element={<MyPage />} />
          <Route path="/mypage/userinfomodifying" element={<UserInfoModifyPage />} />
          <Route path="/mypage/favoritemate" element={<FavoriteTab />} />
          <Route path="/mypage/myletter" element={<MyLetterTab />} />
          <Route path="/mypage/adoptionhandle" element={<AdoptionHandleTab />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
