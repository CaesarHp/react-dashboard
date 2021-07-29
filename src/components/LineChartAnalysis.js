import classes from "./LineChartAnalysis.module.scss";
import ReLineChart from "../charts/ReLineChart";

const LineChartHome = function () {
  return (
    <div className={classes["line-chart-container"]}>
      <span className={classes["line-chart-title"]}>Heart Rate</span>
      <ReLineChart />
    </div>
  );
};

export default LineChartHome;
