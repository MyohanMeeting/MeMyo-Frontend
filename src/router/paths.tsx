import { RouteObject } from "react-router-dom";
import NavbarWrapper from '../components/layout/NavbarWrapper';

const paths: RouteObject[] = [
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        path: "/",
        element: <div>home</div>
      },
    ]
  },
];

export default paths;