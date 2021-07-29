import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Analysis from "./pages/Analysis";
import List from "./pages/List";
import Account from "./pages/Account";

function App() {
  const fetchData = async function () {
    const response = await fetch(
      "https://react-http-51d90-default-rtdb.firebaseio.com/quotes.json"
    );
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    fetchData();
  });

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
