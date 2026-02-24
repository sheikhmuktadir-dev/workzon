import Style from "./chart.module.css";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Your Files", value: 63, color: "#4318FF" },
  { name: "System", value: 25, color: "#6AD2FF" },
  { name: "Other", value: 12, color: "#EFF4FB" },
];

const PieChartWidget = () => {
  return (
    <div className={Style.chartCard}>
      {/* Header */}
      <div className={Style.chartHeader}>
        <h4 className={Style.chartLabel2}>Pie Chart</h4>
      </div>

      {/* Chart */}
      <div style={{ width: "100%", height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={100}
              paddingAngle={0}
              dataKey="value"
              stroke="none"
              startAngle={90}
              endAngle={450}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Custom Legend Box */}
      <div
        style={{
          marginTop: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "12px 0",
          boxShadow: "0px 18px 40px rgba(112, 144, 176, 0.12)",
          borderRadius: "15px",
        }}
      >
        {/* Your Files Section */}
        <div style={{ textAlign: "left" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#4318FF",
              }}
            />
            <span
              style={{
                color: "var(--secondary-color)",
                fontSize: "12px",
                fontWeight: "500",
              }}
            >
              Your Files
            </span>
          </div>
          <div
            style={{
              color: "var(--primary-color)",
              fontSize: "20px",
              fontWeight: "700",
              marginLeft: "14px",
            }}
          >
            63%
          </div>
        </div>

        {/* Vertical Divider */}
        <div
          style={{ width: "1px", height: "40px", backgroundColor: "#E0E5F2" }}
        />

        {/* System Section */}
        <div style={{ textAlign: "left" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#6AD2FF",
              }}
            />
            <span
              style={{
                color: "var(--secondary-color)",
                fontSize: "12px",
                fontWeight: "500",
              }}
            >
              System
            </span>
          </div>
          <div
            style={{
              color: "var(--primary-color)",
              fontSize: "20px",
              fontWeight: "700",
              marginLeft: "14px",
            }}
          >
            25%
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChartWidget;
