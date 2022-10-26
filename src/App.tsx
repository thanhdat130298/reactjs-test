import styles from "./App.module.scss";
import "antd/dist/antd.css";
import "styles/common.scss";
import { Footer } from "layout/Footer";
import { Header } from "layout/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes, LayoutType } from "router";
import { FC, ReactElement } from "react";
import clsx from "clsx";

const LayoutDefault = ({ children, hasRight }: any) => {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.wrapper}>
          <div className={clsx(styles.children, hasRight && styles.hasRight)}>
            {children}
          </div>
          {hasRight && <div className={styles.rightSide}></div>}
        </div>
      </div>
      <Footer />
    </>
  );
};
interface ILayout {
  type: number | undefined;
  children: ReactElement;
  hasRight: boolean | undefined;
}
const Layout: FC<ILayout> = ({ type, children, hasRight }) => {
  switch (type) {
    case LayoutType.default:
      return <LayoutDefault hasRight={hasRight}>{children}</LayoutDefault>;
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
              children={() => (
                <Layout type={route.layout} hasRight={route.hasRight}>
                  {route.page}
                </Layout>
              )}
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
