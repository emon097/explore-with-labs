import "./Analysis.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "React",
    Quiz: 8,
  },
  {
    name: "JavaScript",
    Quiz: 9,
  },
  {
    name: "CSS",
    Quiz: 8,
  },
  {
    name: "Git",
    Quiz: 11,
  },
];

export default function Analysis() {
  return (
    <div className="chart">
      <BarChart
        width={400}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Bar dataKey="Quiz" stackId="a" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}
