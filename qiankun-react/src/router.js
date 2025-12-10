import React from "react";
import { Switch, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import ChartPage from "./pages/Chart";
import ListPage from "./pages/List";
export default function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/chart" component={ChartPage} />
      <Route exact path="/list" component={ListPage} />
    </Switch>
  );
}
