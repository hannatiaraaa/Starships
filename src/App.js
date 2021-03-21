import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from "./routes/history";
import Home from "./features/Home";
import Details from "./features/Details";

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact={true} component={Home} path="/" />
        <Route exact={true} component={Details} path="/details" />
      </Switch>
    </Router>
  );
}
