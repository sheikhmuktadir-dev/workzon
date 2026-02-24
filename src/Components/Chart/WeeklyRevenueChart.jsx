import Style from "./chart.module.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "17", revenue: 40, profit: 30 },
  { day: "18", revenue: 35, profit: 25 },
  { day: "19", revenue: 30, profit: 20 },
  { day: "20", revenue: 45, profit: 35 },
  { day: "21", revenue: 32, profit: 22 },
  { day: "22", revenue: 38, profit: 28 },
  { day: "23", revenue: 42, profit: 32 },
  { day: "24", revenue: 33, profit: 23 },
  { day: "25", revenue: 40, profit: 30 },
];

export default function WeeklyRevenue() {
  return (
    <div className={Style.chartCard}>
      <div className={Style.chartHeader}>
        <h4 className={Style.chartLabel2}>Weekly Revenue</h4>
      </div>

      <div style={{ width: "100%", height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            barSize={12}
          >
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#A3AED0", fontSize: 12, fontWeight: 500 }}
              dy={10}
            />
            <YAxis hide={true} />
            <Tooltip cursor={{ fill: "transparent" }} />

            {/* The Cyan Bar (Bottom) */}
            <Bar
              dataKey="revenue"
              stackId="a"
              fill="#6AD2FF"
              radius={[0, 0, 0, 0]}
            />

            {/* The Purple Bar (Top) */}
            <Bar
              dataKey="profit"
              stackId="a"
              fill="#4318FF"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
