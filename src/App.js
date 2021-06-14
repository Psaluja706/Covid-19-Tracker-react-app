import React, { Component } from "react";
import "./App.css";

import Nav from "./components/nav";
import Home from "./components/home";

import Resources from "./components/resources";

import { HashRouter, Route, Link, Switch } from "react-router-dom";

export default () => {
 return (
  <>
   <Nav />

   <HashRouter basename={process.env.PUBLIC_URL}>
    <Route
     render={({ location }) => (
      <Switch location={location}>
       <Route exact path="/" component={Home}></Route>
       <Route exact path="/resources/" component={Resources}></Route>
      </Switch>
     )}
    />
   </HashRouter>
  </>
 );
};
