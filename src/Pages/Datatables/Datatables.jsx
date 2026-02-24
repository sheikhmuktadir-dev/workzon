import { userData, productData } from "../../Data/Table";
import UniversalTable from "../../Components/Table/UniversalTable";
import Style from "./datatable.module.css";

export default function Datatables() {
  const userColumns = [
    { data: "id", title: "ID" },
    { data: "name", title: "Full Name" },
    { data: "email", title: "Email Address" },
    { data: "role", title: "Permission Level" },
  ];

  const productColumns = [
    { data: "id", title: "SKU" },
    { data: "prodName", title: "Product" },
    { data: "price", title: "Price" },
    { data: "stock", title: "Stock Count" },
  ];

  return (
    <div className={Style.datatableFlex}>
      <UniversalTable
        data={userData}
        columns={userColumns}
        title="User Directory"
      />
      <UniversalTable
        data={productData}
        title="Product Inventory"
        columns={productColumns}
      />
    </div>
  );
}
