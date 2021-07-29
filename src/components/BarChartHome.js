import classes from "./BarChartHome.module.scss";
import ReBarChart from "../charts/ReBarChart";

const BarChartHome = function () {
  return (
    <div className={classes["bar-chart-container"]}>
      <span className={classes["bar-chart-title"]}>Calories Statistics</span>
      <ReBarChart />
    </div>
  );
};

export default BarChartHome;
