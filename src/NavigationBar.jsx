// NavigationBar.js
import React from "react";
import App from "./App";
import Registration from "./Registration";
import Home from "./Home";
import Gallery from "./Gallery";
import { Route, Link, Switch } from "wouter";
import Contact from "./Contact";
import NotFound from "./NotFound";

function NavigationBar() {
  return (
    <Switch>
      <Route exact path="/">
        <App />
        <Home />
        <Gallery />
        <Contact />
      </Route>
      <Route path="/gallery">
        <App />
        <Gallery />
      </Route>
      <Route path="/registration">
        <Registration />
      </Route>
      <Route path="/home">
        <App />
        <Home />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default NavigationBar;
