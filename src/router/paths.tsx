import { RouteObject } from 'react-router-dom';
import Wrapper from '../components/layout/Wrapper';
import HomePage from '../pages/home/HomePage';

const paths: RouteObject[] = [
  {
    path: '/',
    element: <Wrapper />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
];

export default paths;
