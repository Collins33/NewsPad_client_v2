import React from "react";
import Home from "../views/Home/index";
import MyArticles from "../views/MyArticles/index";
import RouteError from "../views/Error/index";
import Header from "../components/header/Header";
import { Route, Switch } from "react-router-dom";

const Routes = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/profile" component={MyArticles} exact />
      <Route path="*" component={RouteError} />
    </Switch>
  </>
);

export default Routes;
