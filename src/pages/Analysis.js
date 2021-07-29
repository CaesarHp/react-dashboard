import React from "react";

import classes from "./Analysis.module.scss";
import Header from "../components/Header";
import LineChartHome from "../components/LineChartAnalysis";
import Card from "../cards/Card";

const Analysis = function () {
  return (
    <React.Fragment>
      <div className={classes["analysis-container"]}>
        <Header title={"Analysis"} />
        <main>
          <Card value={"sleep"} />
          <Card value={"step"} />
          <Card value={"heart"} />
        </main>
      </div>
    </React.Fragment>
  );
};

export default Analysis;
