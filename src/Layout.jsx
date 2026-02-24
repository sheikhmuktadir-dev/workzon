import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { MenuContext } from "./Context/MenuContext/MenuContext";
import { useContext } from "react";
import { useEffect } from "react";

export default function Layout() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  const { barCollapse } = useContext(MenuContext);
  return (
    <div className="dashboardContainer">
      <Sidebar />
      <div
        className={`dashboardContent ${barCollapse ? "dashboardContainerExpand" : ""}`}
      >
        <Navbar />
        <main className="dashboardMainContent">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
