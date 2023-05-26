import { RouteObject } from 'react-router-dom';
import NavbarWrapper from '../components/layout/NavbarWrapper';
import PostList from '../pages/post/postList';
import Post from '../pages/post/post';

const paths: RouteObject[] = [
  {
    path: '/',
    element: <Post />,
    children: [
      {
        path: '/',
        element: <div>home</div>,
      },
    ],
  },
];

export default paths;
