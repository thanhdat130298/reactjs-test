import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Detail } from "../pages/Detail";
import { Profile } from "../pages/Profile";
import { Home } from "../pages/Home";
const routes = [
  {
    route: "/login",
    component: Login,
    label: "Login",
    // noAuth: true,
  },
  {
    route: "/register",
    component: Register,
    label: "Register",
    // noAuth: true,
  },
  {
    route: "/profile",
    component: Profile,
    label: "Profile",
    // isPrivate: true,
  },
  {
    route: "/dashboard",
    component: Dashboard,
    label: "Dashboard",
    //list posts
  },
  {
    route: "",
    component: Home,
    label: "Home",
    //landing
  },
];
export const Guard = () => {
  return (
    <Router>
      <Switch>
        {routes.map((item, i) => {
          return (
            <Route key={i} path={item.route}>
              {item.component}
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
};
