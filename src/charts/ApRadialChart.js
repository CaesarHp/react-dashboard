import { useState } from "react";
import { useSelector } from "react-redux";

import Chart from "react-apexcharts";

const ApRadialChart = function () {
  const progress = useSelector((state) => state.data.monthlyProgress);
  const completed = Math.round(
    (progress.monthFinishedTodo / progress.monthTotalTodo) * 100
  );

  const [options] = useState({
    chart: {
      type: "radialBar",
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: "97%",
          margin: 3,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: "18px",
            fontWeight: 400,
          },
        },
      },
    },
    fill: {
      type: "solid",
      colors: "#a37cff",
    },
  });

  const [series] = useState([completed]);

  return (
    <div>
      <Chart options={options} series={series} type="radialBar" />
    </div>
  );
};

export default ApRadialChart;
