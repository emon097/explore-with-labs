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
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "React",
    quiz: 8,
  },
  {
    name: "JavaScript",
    quiz: 9,
  },
  {
    name: "CSS",
    quiz: 8,
  },
  {
    name: "Git",
    quiz: 11,
  },
];
export default function Analysis() {
  return (
    <div className="chart">
      <h1 className="md:text-3xl md:mb-6 md:font-bold bg-green-400 md:mr-36 md:ml-36 md:p-6 rounded-lg md:text-white   ">
        {" "}
        Number of Quiz and Quiz Topic{" "}
      </h1>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
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

          <Bar dataKey="quiz" stackId="a" fill="#82CA9D" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
