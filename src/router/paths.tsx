import { RouteObject } from 'react-router-dom';

import Wrapper from '../components/layout/Wrapper';
import HomePage from '../pages/home/HomePage';
import LoginPage from '../pages/login/LoginPage';
import SignupPage from '../pages/signup/SignupPage';
import MyPage from '../pages/mypage/MyPage';
import AdoptForm from '../pages/adopt/AdoptForm';

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
        path: '/mypage',
        element: <MyPage />,
      },
    ],
  },
];

export default paths;
