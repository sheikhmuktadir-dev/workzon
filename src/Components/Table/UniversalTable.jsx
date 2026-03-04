import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";
import Style from "./table.module.css";

DataTable.use(DT);

export default function UniversalTable({ data, columns, title }) {
  return (
    <div className={Style.tableBox}>
      <h4 className={Style.tableLabel}>{title}</h4>
      <div className={Style.tableWrapper}>
        <DataTable
          data={data}
          columns={columns}
          options={{
            layout: {
              topStart: null,
              topEnd: null,
            },
            autoWidth: false,
            scrollX: true, // Allows the table to overflow if content is too wide
            columnDefs: [
              { targets: "_all", className: "dt-left" }, // Optional: ensures text alignment
            ],
            paging: true,
            info: false,
            pageLength: 5,
            drawCallback: function () {
              this.api().table().header().style.borderBottom = "none";
            },
          }}
        />
      </div>
    </div>
  );
}
