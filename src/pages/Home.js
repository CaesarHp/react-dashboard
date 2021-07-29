import React from "react";

import classes from "./Home.module.scss";
import Header from "../components/Header";
import CardHome from "../components/CardHome";
import BarChartHome from "../components/BarChartHome";
import UserHome from "../components/UserHome";

const Home = function () {
  return (
    <React.Fragment>
      <div className={classes["home-container"]}>
        <Header title={"Hello, Amanda"} />
        <main className={classes["home-main-content"]}>
          <div className={classes["home-data"]}>
            <CardHome />
            <BarChartHome />
          </div>
          <div className={classes["home-user"]}>
            <UserHome />
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default Home;
