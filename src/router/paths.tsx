import { RouteObject } from 'react-router-dom';

import Wrapper from '../components/layout/Wrapper';
import HomePage from '../pages/home/HomePage';
import LoginPage from '../pages/login/LoginPage';
import SignupPage from '../pages/signup/SignupPage';
import MyPage from '../pages/mypage/MyPage';
import KakaoCallBack from '../components/KakaoCallBack';
import CertificationPage from '../pages/certification/CertificationPage';
import AdoptPage from '@pages/adopt/AdoptPage';
import AdoptDetail from '@pages/adopt/AdoptDetail';
import AdoptForm from '@pages/adopt/AdoptForm';
import AdoptApply from '@pages/adopt/AdoptApply';
import UserInfoModifyPage from '@pages/mypage/components/userInfoModifyTab/UserInfoModifyPage';
import MyLetterTab from '@pages/mypage/components/myLetterTab/MyLetterTab';
import FavoriteTab from '@pages/mypage/components/favoriteTab/FavoriteTab';
import AdoptionHandleTab from '@pages/mypage/components/adoptionHandleTab/AdoptionHandleTab';

const paths: RouteObject[] = [
  {
    path: '/',
    element: <Wrapper />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/signup',
        element: <SignupPage />,
      },
      {
        path: '/adopt',
        element: <AdoptPage />,
      },
      {
        path: '/adopt/detail/:noticeId',
        element: <AdoptDetail />,
      },
      {
        path: '/adopt/register',
        element: <AdoptForm />,
      },
      {
        path: '/adopt/apply',
        element: <AdoptApply />,
      },
      {
        path: '/adopt',
        element: <AdoptPage />,
      },
      {
        path: '/adopt/detail/:noticeId',
        element: <AdoptDetail />,
      },
      {
        path: '/mypage',
        element: <MyPage />,
      },
      {
        path: '/oauth/kakao/callback',
        element: <KakaoCallBack />,
      },
      {
        path: '/certification',
        element: <CertificationPage />,
        children: [
          { index: true, element: <MyLetterTab /> },
          { path: 'myNotice', element: <MyLetterTab /> },
          { path: 'myAdoption', element: <AdoptionHandleTab /> },
          { path: 'favoriteFriend', element: <FavoriteTab /> },
          { path: 'userInfoModifying', element: <UserInfoModifyPage /> },
        ],
      },
    ],
  },
];

export default paths;
