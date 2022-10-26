import { Home } from "pages/Home";
import { Login } from "pages/Login";
import { MyPost } from "pages/MyPost";
import { PostDetail } from "pages/PostDetail";
export const LayoutType = {
  empty: 0,
  default: 1,
};
export const routes = [
  {
    path: "/",
    exact: true,
    page: <Home />,
    hasRight: true,
    layout: LayoutType.default,
  },
  {
    path: "/login",
    exact: true,
    page: <Login />,
  },
  {
    path: "/a",
    exact: true,
    page: <div>shoelaces!</div>,
  },
  {
    path: "/post/:id",
    page: <PostDetail />,
    layout: LayoutType.default,
  },
  {
    path: "/:id",
    page: <MyPost />,
    layout: LayoutType.default,
  },
];
