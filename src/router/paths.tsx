import { RouteObject } from 'react-router-dom';
import NavbarWrapper from '../components/layout/NavbarWrapper';
import HomePage from '../pages/home/HomePage';

const paths: RouteObject[] = [
  {
    path: '/',
    element: <NavbarWrapper />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
];

export default paths;
