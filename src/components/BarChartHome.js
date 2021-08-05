import { useSelector } from "react-redux";

import classes from "./BarChartHome.module.scss";
import ReBarChart from "../charts/ReBarChart";

const BarChartHome = function () {
  const barChartData = useSelector((state) => state.data.caloriesData);

  console.log(barChartData);

  return (
    <div className={classes["bar-chart-container"]}>
      <span className={classes["bar-chart-title"]}>Calories Statistics</span>
      <ReBarChart data={barChartData} />
    </div>
  );
};

export default BarChartHome;
