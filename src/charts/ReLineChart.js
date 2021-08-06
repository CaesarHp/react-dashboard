import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    goal: 4000,
    finished: 2400,
  },
  {
    name: "Tue",
    goal: 3000,
    finished: 1398,
  },
  {
    name: "Wed",
    goal: 2000,
    finished: 9800,
  },
  {
    name: "Thu",
    goal: 2780,
    finished: 3908,
  },
  {
    name: "Fri",
    goal: 1890,
    finished: 4800,
  },
];

const ReLineChart = function () {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart
        data={data}
        margin={{
          top: 0,
          right: 5,
          left: -20,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend layout="vetical" verticalAlign="top" align="right" />
        <Line
          type="monotone"
          dataKey="goal"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="finished" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ReLineChart;
