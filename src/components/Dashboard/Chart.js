import React, { PureComponent } from "react";
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
    TIMESTAMP: "12:00",
    RR: 22,
    CR: 0,
    OS: 99,
    HR: 72,
    amt: 2400,
  },
  {
    TIMESTAMP: "12:05",
    RR: 21,
    CR: 3,
    OS: 98,
    HR: 75,
    amt: 2210,
  },
  {
    TIMESTAMP: "12:10",
    RR: 19,
    CR: 0,
    OS: 98,
    HR: 74,
    amt: 2290,
  },
  {
    TIMESTAMP: "12:15",
    RR: 22,
    CR: 0,
    OS: 98,
    HR: 80,
    amt: 2000,
  },
  {
    TIMESTAMP: "12:20",
    RR: 24,
    CR: 0,
    OS: 99,
    HR: 76,
    amt: 2181,
  },
  {
    TIMESTAMP: "12:25",
    RR: 23,
    CR: 0,
    OS: 98,
    HR: 73,
    amt: 2500,
  },
  {
    TIMESTAMP: "12:30",
    RR: 23,
    CR: 0,
    OS: 99,
    HR: 75,
    amt: 2100,
  },
];

export default class SummaryChart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  render() {
    return (
      <ResponsiveContainer>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
          }}
        >
          <div>Name</div>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="TIMESTAMP" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="RR" stroke="#8884d8" />
          <Line type="monotone" dataKey="OS" stroke="#82ca9d" />
          <Line type="monotone" dataKey="HR" stroke="red" />
          <Line type="monotone" dataKey="CR" stroke="brown" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
