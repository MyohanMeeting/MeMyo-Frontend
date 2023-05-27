import { RouteObject } from 'react-router-dom';
import NavbarWrapper from '../components/layout/NavbarWrapper';
import MyPage from '../pages/mypage/MyPage';

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
];

export default paths;
