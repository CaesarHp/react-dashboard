import React from "react";

import classes from "./Analysis.module.scss";
import Header from "../components/Header";
import AnalysisBasicForm from "../components/AnalysisBasicForm";
import AnalysisCaloriesForm from "../components/AnalysisCaloriesForm";

const Analysis = function () {
  return (
    <React.Fragment>
      <div className={classes["analysis-container"]}>
        <Header title={"Analysis"} />
        <AnalysisBasicForm />
        <AnalysisCaloriesForm />
      </div>
    </React.Fragment>
  );
};

export default Analysis;
