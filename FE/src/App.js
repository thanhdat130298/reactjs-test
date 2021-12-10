import React from "react"

import "./App.css"

import { connect } from "react-redux"
import {
  actionLogin,
  actionLogout,
} from "./redux/auth/auth.actions"
import { Guard } from "./guards/authenticationGuard";

function App(props) {
  return (
    <div className="App">
      <Guard/>
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