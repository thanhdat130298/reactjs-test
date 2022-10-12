import "./App.scss";
// import { connect } from "react-redux";
// import Login from "./pages/Login";
// import { actionLogin, actionLogout } from "./redux/auth/auth.actions";
// import { Layout } from "./layout";
import { Home } from "pages/Home";
import { Login } from "pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const routes = [
  {
    path: "/",
    exact: true,
    page: () => <Home />,
  },
  {
    path: "/login",
    page: () => <Login />,
  },
  {
    path: "/a",
    page: () => <div>shoelaces!</div>,
  },
];
const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.page />}
            />
          ))}
        </Switch>
      </Router>
    </div>
  );
};

// const mapStateToProps = (state: { auth: { isLogin: any } }) => {
//   return {
//     isLogin: state.auth.isLogin,
//   };
// };

// const mapDispatchToProps = (dispatch: (arg0: { type: string }) => any) => {
//   return {
//     actionLogin: () => dispatch(actionLogin()),

//     actionLogout: () => dispatch(actionLogout()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
