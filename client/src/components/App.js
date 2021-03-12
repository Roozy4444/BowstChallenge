import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
import BottomBar from "./layout/BottomBar"
import HypeTile from "./layout/HypeTile"
import BeswickTile from "./layout/BeswickTile"
import EasternTile from "./layout/EasternTile"

const App = (props) => {
  
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <div className="page-info">
            <div className="base-message">
              <h2 className="main-title">Making it right.</h2>
              <h4 className="description">We design, develop, and deliver experiences that are technically impressive and easy to use.</h4>
              <div className="tile-container">
              <HypeTile/><BeswickTile/><EasternTile/> 
              </div>
            </div>
          </div>
        </Route>
        <Route exact path="/services">
          <h1>Services</h1>
        </Route>
        <Route exact path="/clients">
          <h1>Clients</h1>
        </Route>
        <Route exact path="/pricing">
          <h1>Pricing</h1>
        </Route>
        <Route exact path="/Resources">
          <h1>Resources</h1>
        </Route>
      </Switch>
      <BottomBar />
    </Router>
  );
};

export default hot(App);
