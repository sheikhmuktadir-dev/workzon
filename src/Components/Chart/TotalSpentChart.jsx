import Style from "./chart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "SEP", current: 30, previous: 40 },
  { name: "OCT", current: 55, previous: 35 },
  { name: "NOV", current: 45, previous: 60 },
  { name: "DEC", current: 70, previous: 40 },
  { name: "JAN", current: 85, previous: 50 },
  { name: "FEB", current: 75, previous: 65 },
];

export default function TotalSpentChart() {
  return (
    <div className={Style.chartCard}>
      <div className={Style.chartHeader}>
        <div>
          <p className={Style.chartLabel}>Total Spent</p>
          <h2 className={Style.chartValue}>$37.5K</h2>
          <span className={Style.chartStat}>+2.45%</span>
        </div>
      </div>

      <div style={{ width: "100%", height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid
              vertical={false}
              stroke="transparent"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#A3AED0", fontSize: 12, fontWeight: 500 }}
              dy={10}
            />

            <YAxis hide={true} domain={["dataMin - 10", "dataMax + 10"]} />

            <Tooltip
              contentStyle={{
                borderRadius: "15px",
                border: "none",
                boxShadow: "0px 18px 40px rgba(112, 144, 176, 0.12)",
              }}
            />

            <Line
              type="monotone"
              dataKey="current"
              stroke="#4318FF"
              strokeWidth={4}
              dot={false}
              activeDot={{ r: 8 }}
            />

            <Line
              type="monotone"
              dataKey="previous"
              stroke="#6AD2FF"
              strokeWidth={4}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
