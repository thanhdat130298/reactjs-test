import { Home } from "pages/Home";
import { Login } from "pages/Login";
export const LayoutType = {
  empty: 0,
  default: 1,
};
export const routes = [
  {
    path: "/",
    exact: true,
    page: <Home />,
    layout: LayoutType.default,
  },
  {
    path: "/login",
    page: <Login />,
  },
  {
    path: "/a",
    page: <div>shoelaces!</div>,
  },
];
