import { RouteObject } from 'react-router-dom';

import Wrapper from '@components/layout/Wrapper';
import HomePage from '@pages/home/HomePage';
import LoginPage from '@pages/login/LoginPage';
import SignupPage from '@pages/signup/SignupPage';
import AdoptPage from '@pages/adopt/AdoptPage';
import AdoptDetail from '@pages/adopt/AdoptDetail';
import MyPage from '@pages/mypage/MyPage';
import AdoptForm from '@pages/adopt/AdoptForm';
import AdoptApply from '@pages/adopt/AdoptApply';
import UserInfoModifyPage from '@pages/mypage/components/userInfoModifyTab/UserInfoModifyPage';
import MyLetterTab from '@pages/mypage/components/myLetterTab/MyLetterTab';
import FavoriteTab from '@pages/mypage/components/favoriteTab/FavoriteTab';

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
        path: '/mypage',
        element: <MyPage />,
        children: [
          { index: true, element: <MyLetterTab /> },
          { path: '/mypage/myNotice', element: <MyLetterTab /> },
          { path: 'favoriteFriend', element: <FavoriteTab /> },
          { path: 'userInfoModifying', element: <UserInfoModifyPage /> },
        ],
      },
    ],
  },
];

export default paths;
