import React from "react"

import "./App.css"

import { connect } from "react-redux"
import Login from "../src/pages/Login"
import { Route, Switch } from 'react-router-dom';
import {
  actionLogin,
  actionLogout,
} from "./redux/auth/auth.actions"
import Layout from "./layout";

function App(props) {
  return (
    <div className="App">
      {/* <Login/> */}
      <Layout/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isLogin: state.auth.isLogin,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actionLogin: () => dispatch(actionLogin()),

    actionLogout: () => dispatch(actionLogout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)