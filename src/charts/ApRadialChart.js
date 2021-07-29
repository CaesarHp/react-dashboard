import { useState } from "react";
import Chart from "react-apexcharts";

const ApRadialChart = function () {
  const [options, setOption] = useState({
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

  const [series, setSeries] = useState([76]);

  return (
    <div>
      <Chart options={options} series={series} type="radialBar" />
    </div>
  );
};

export default ApRadialChart;
