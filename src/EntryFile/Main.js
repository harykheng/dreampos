import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  HashRouter as Router,
} from "react-router-dom";
import App from "../InitialPage/App";
import config from "config";

import "../assets/plugins/fontawesome/css/fontawesome.min.css";
import "../assets/plugins/fontawesome/css/all.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/js/bootstrap.bundle.min.js";
import "../assets/css/font-awesome.min.css";
import "../assets/css/line-awesome.min.css";
import "../assets/css/style.css";
import RightSideBar from "../components/rightSidebar";

const MainApp = () => (
  <Router basename={`${process.env.REACT_APP_URI}`}>
    <RightSideBar />
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Router>
);

export default MainApp;
