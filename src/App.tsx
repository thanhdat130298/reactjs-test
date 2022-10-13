import "./App.scss";
// import { connect } from "react-redux";
// import Login from "./pages/Login";
// import { actionLogin, actionLogout } from "./redux/auth/auth.actions";
// import { Layout } from "./layout";
import { Footer } from "layout/Footer";
import { Header } from "layout/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes, LayoutType } from "router";
import { FC, ReactElement } from "react";

const LayoutDefault = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
interface ILayout {
  type: number | undefined;
  children: ReactElement;
}
const Layout: FC<ILayout> = ({ type, children }) => {
  switch (type) {
    case LayoutType.default:
      return <LayoutDefault>{children}</LayoutDefault>;
    default:
      return children;
  }
};

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
              children={() => <Layout type={route.layout}>{route.page}</Layout>}
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
