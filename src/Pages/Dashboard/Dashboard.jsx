import BoxCardSmall from "../../Components/Cards/BoxCardSmall";
import { cards } from "../../Data/Dashboard";
import Style from "./dashboard.module.css";
import TotalSpentChart from "../../Components/Chart/TotalSpentChart";
import WeeklyRevenue from "../../Components/Chart/WeeklyRevenueChart";
import TrafficWidget from "../../Components/Chart/TrafficWidgetChart";
import PieChartWidget from "../../Components/Chart/PieChartWidget";
import TableOne from "../../Components/Table/TableOne";
import { tableHeaders } from "../../Data/Table";
import { tableData } from "../../Data/Table";

export default function Dashboard() {
  return (
    <div className={Style.dashboardMain}>
      <div className={Style.cardGrid}>
        {cards.map((list, index) => {
          const Icon = list.icon;
          return (
            <BoxCardSmall
              key={list.subheading || index}
              data={list}
              Icons={Icon}
            />
          );
        })}
      </div>

      <div className={Style.topBox}>
        <TotalSpentChart />
      </div>
      <div className={Style.topBox}>
        <WeeklyRevenue />
      </div>

      <div className={Style.bottomLarge}>
        <TableOne
          heading="Check Table"
          headerData={tableHeaders}
          bodyData={tableData}
          box={true}
          data1="name"
          data2="progress"
          data3="quantity"
          data4="date"
        />
      </div>
      <div className={Style.bottomSmall}>
        <TrafficWidget />
      </div>
      <div className={Style.bottomSmall}>
        <PieChartWidget />
      </div>
    </div>
  );
}
