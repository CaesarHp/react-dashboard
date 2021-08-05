import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Analysis from "./pages/Analysis";
import List from "./pages/List";
import Account from "./pages/Account";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/analysis">
          <Analysis />
        </Route>
        <Route path="/list">
          <List />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
