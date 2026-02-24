import Style from "./chart.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { time: "00", visitors: 800 },
  { time: "04", visitors: 1200 },
  { time: "08", visitors: 1800 },
  { time: "12", visitors: 800 },
  { time: "14", visitors: 2100 },
  { time: "16", visitors: 2579 },
  { time: "18", visitors: 1400 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#1B254B",
          borderRadius: "12px",
          padding: "10px",
          color: "#fff",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          border: "none",
          textAlign: "left",
        }}
      >
        <div
          style={{ fontSize: "14px", fontWeight: "700", marginBottom: "4px" }}
        >
          {label}
        </div>
        <div style={{ fontSize: "12px", opacity: 0.8 }}>
          Daily Traffic: {payload[0].value}
        </div>
      </div>
    );
  }
  return null;
};

const TrafficWidget = () => {
  return (
    <div className={Style.chartCard}>
      {/* Header */}
      <div className={Style.chartHeader}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "32px",
          }}
        >
          <div>
            <p className={Style.chartLabel}>Daily Traffic</p>

            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "8px",
                marginTop: "4px",
              }}
            >
              <h2 className={Style.chartValue}>2.579</h2>
              <span
                style={{
                  color: "#A3AED0",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Visitors
              </span>
            </div>
          </div>
          <div className={Style.chartStat}>+2.45%</div>
        </div>
      </div>

      {/* Chart */}
      <div style={{ width: "100%", height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4318FF" />
                <stop offset="100%" stopColor="rgba(67, 24, 255, 0.28)" />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#A3AED0", fontSize: 12, fontWeight: "500" }}
              dy={15}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "transparent" }}
              offset={-40}
            />

            <Bar
              dataKey="visitors"
              fill="url(#barGradient)"
              radius={[50, 50, 50, 50]}
              barSize={12}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  style={{ transition: "all 0.3s ease" }}
                  cursor="pointer"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TrafficWidget;
