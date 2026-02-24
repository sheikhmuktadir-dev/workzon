import { MdHome, MdShoppingCart, MdLock } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { SlGraph } from "react-icons/sl";

export const sidebarLinks = [
  {
    name: "Main Dashboard",
    path: "/",
    icon: MdHome,
    end: true,
  },
  {
    name: "NFT Marketplace",
    path: "/nft-marketplace",
    icon: MdShoppingCart,
    end: false,
  },
  {
    name: "Data Tables",
    path: "/data-tables",
    icon: SlGraph,
    end: false,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: IoMdPerson,
    end: false,
  },
  {
    name: "Users Data",
    path: "users-data",
    icon: MdLock,
    end: false,
  },
  {
    name: "Account Settings",
    path: "/account-settings",
    icon: IoSettingsSharp,
    end: false,
  },
];

export const sidebarCard = {
  title: "Upgrade to PRO",
  description:
    "Improve your development process and start doing more with Workzon PRO!",
  linkText: "Upgrade to PRO",
  linkPath: "/",
  svg: (
    <svg
      width="41"
      height="41"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0923 27.3033H30.8176V36.3143H10.0923V27.3033Z"
        fill="white"
      />
      <path
        d="M31.5385 29.1956C31.5385 26.2322 30.3707 23.3901 28.2922 21.2947C26.2136 19.1992 23.3945 18.022 20.4549 18.022C17.5154 18.022 14.6963 19.1992 12.6177 21.2947C10.5392 23.3901 9.37143 26.2322 9.37143 29.1956L20.4549 29.1956H31.5385Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5 31.989C26.8452 31.989 31.989 26.8452 31.989 20.5C31.989 14.1548 26.8452 9.01099 20.5 9.01099C14.1548 9.01099 9.01099 14.1548 9.01099 20.5C9.01099 26.8452 14.1548 31.989 20.5 31.989ZM20.5 41C31.8218 41 41 31.8218 41 20.5C41 9.17816 31.8218 0 20.5 0C9.17816 0 0 9.17816 0 20.5C0 31.8218 9.17816 41 20.5 41Z"
        fill="white"
      />
    </svg>
  ),
};
