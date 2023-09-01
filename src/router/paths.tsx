import { RouteObject } from 'react-router-dom';

import Wrapper from '@components/layout/Wrapper';
import HomePage from '@pages/home/HomePage';
import LoginPage from '@pages/login/LoginPage';
import SignupPage from '@pages/signup/SignupPage';
import AdoptPage from '@pages/adopt/AdoptPage';
import AdoptDetail from '@pages/adopt/AdoptDetail';
import MyPage from '@pages/mypage/MyPage';
import AdoptForm from '@pages/adopt/AdoptForm';
import AdoptApplying from '@pages/adopt/AdoptApplying';

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
        path: '/adopt/apply/:noticeId',
        element: <AdoptApplying />,
      },
      {
        path: '/mypage',
        element: <MyPage />
      },
    ],
  },
];

export default paths;
