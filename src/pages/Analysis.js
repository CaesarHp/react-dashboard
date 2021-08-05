import React from "react";

import classes from "./Analysis.module.scss";
import Header from "../components/Header";
import LineChartAnalysis from "../components/LineChartAnalysis";
import Card from "../cards/Card";

const Analysis = function () {
  return (
    <React.Fragment>
      <div className={classes["analysis-container"]}>
        <Header title={"Analysis"} />
        <main className={classes["analysis-main-container"]}>
          <LineChartAnalysis />
          <LineChartAnalysis />
          <LineChartAnalysis />
          <LineChartAnalysis />
        </main>
      </div>
    </React.Fragment>
  );
};

export default Analysis;
