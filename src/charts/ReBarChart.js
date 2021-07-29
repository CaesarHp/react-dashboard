import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "4:00-6:00",
    Burn: 100,
    Earn: 0,
  },
  {
    name: "7:00-9:00",
    Burn: 260,
    Earn: 600,
  },
  {
    name: "10:00-12:00",
    Burn: 500,
    Earn: 850,
  },
  {
    name: "13:00-15:00",
    Burn: 320,
    Earn: 300,
  },
  {
    name: "16:00-18:00",
    Burn: 1150,
    Earn: 800,
  },
  {
    name: "19:00-21:00",
    Burn: 350,
    Earn: 100,
  },
  {
    name: "22:00-00:00",
    Burn: 130,
    Earn: 20,
  },
];

const ReBarChart = function () {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
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
        <Bar dataKey="Earn" /*fill="#8884d8"*/ fill="#7472db" />
        <Bar dataKey="Burn" /*fill="#82ca9d"*/ fill="#f08273" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ReBarChart;
