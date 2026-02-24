import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// global css
import "./Styles/index.css";
import "./Styles/layout.css";
import "./Styles/root.css";

// router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import Marketplace from "./Pages/Marketplace/Marketplace.jsx";
import NotFound from "./Pages/NotFound/Notfound.jsx";
import Layout from "./Layout.jsx";
import ThemeContextProvider from "./Context/ThemeContext/ThemeContextProvider.jsx";
import MenuContextProvider from "./Context/MenuContext/MenuContextProvider.jsx";
import Datatables from "./Pages/Datatables/Datatables.jsx";
import Signin from "./Auth/Signin.jsx";
import Signup from "./Auth/Signup.jsx";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import UsersData from "./Pages/UsersData/UserdData.jsx";
import AccountSettings from "./Pages/AccountSettings/AccountSettings.jsx";

const routes = createBrowserRouter([
  {
    path: "/sign-in",
    element: <Signin />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "nft-marketplace",
            element: <Marketplace />,
          },
          {
            path: "data-tables",
            element: <Datatables />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "users-data",
            element: <UsersData />,
          },
          {
            path: "account-settings",
            element: <AccountSettings />,
          },
          {
            path: "newsletter-settings",
            element: <AccountSettings />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <MenuContextProvider>
        <RouterProvider router={routes} />
      </MenuContextProvider>
    </ThemeContextProvider>
  </StrictMode>,
);
