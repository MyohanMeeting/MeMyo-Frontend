import { RouteObject } from 'react-router-dom';
import NavbarWrapper from '../components/layout/NavbarWrapper';
import MyPage from '../pages/mypage/MyPage';
import LoginPage from '../pages/login/LoginPage';
import SignupPage from '../pages/signup/SignupPage';

const paths: RouteObject[] = [
  {
    path: '/',
    element: <NavbarWrapper />,
    children: [
      {
        path: '/',
        element: <div>home</div>,
      },
      {
        path: '/mypage',
        element: <MyPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
];

export default paths;
