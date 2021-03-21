import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Home from "./features/Home";
import Details from "./features/Details";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route component={withRouter(Details)} exact path="/details" />
        <Route component={withRouter(Home)} exact path="/" />
      </Switch>
    </Router>
  );
}
