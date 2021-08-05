import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ReBarChart = function ({ data }) {
  const chartData = [
    {
      name: "6:00-10:00",
      Burn: data.morningBurn,
      Earn: data.morningEarn,
    },
    {
      name: "11:00-15:00",
      Burn: data.noonBurn,
      Earn: data.noonEarn,
    },
    {
      name: "16:00-20:00",
      Burn: data.afternoonBurn,
      Earn: data.afternoonEarn,
    },
    {
      name: "21:00-0:00",
      Burn: data.nightBurn,
      Earn: data.nightEarn,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={chartData}
        margin={{
          top: 0,
          right: 0,
          left: -20,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 5" />
        <XAxis dataKey="name" axisLine={{ stroke: "white" }} />
        <YAxis axisLine={{ stroke: "white" }} />
        <Tooltip />
        <Legend layout="vetical" verticalAlign="top" align="right" />
        <Bar dataKey="Earn" /*fill="#8884d8"*/ barSize={30} fill="#7472db" />
        <Bar dataKey="Burn" /*fill="#82ca9d"*/ barSize={30} fill="#f08273" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ReBarChart;
