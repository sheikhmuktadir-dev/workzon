import { Link, NavLink } from "react-router-dom";
import Style from "./sidebar.module.css";
import { MenuContext } from "../../Context/MenuContext/MenuContext";
import { useContext } from "react";
import { sidebarLinks } from "../../Data/Sidebar";
import { sidebarCard } from "../../Data/Sidebar";
import { IoMdClose } from "react-icons/io";

export default function Sidebar() {
  const { barCollapse, setBarCollapse } = useContext(MenuContext);

  // Helper to close ONLY on mobile and tab
  const handleNavLinkClick = () => {
    if (window.innerWidth < 1023.98) {
      setBarCollapse(false);
    }
  };
  return (
    <div
      className={`${Style.sidebarMain} ${barCollapse ? Style.sidebarCollapse : ""}`}
    >
      <button
        className={Style.sidebarMobileClose}
        onClick={() => setBarCollapse(false)}
      >
        <IoMdClose />
      </button>
      <div className={Style.sidebarLogoArea}>
        <Link to="/" className={Style.sidebarLogo}>
          <div className={Style.logoShort}>
            W<span>F</span>
          </div>

          <div className={Style.logoFull}>
            Workzon<span>Free</span>
          </div>
        </Link>
      </div>

      <div className={Style.sidebarContent}>
        <ul className={Style.sidebarList}>
          {sidebarLinks?.map((item, index) => {
            const Icon = item.icon;
            return (
              <li className={Style.sidebarItem} key={item.name || index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `${Style.sidebarLink} ${
                      isActive ? Style.sidebarLinkActive : ""
                    }`
                  }
                  end={item.end}
                  onClick={handleNavLinkClick}
                >
                  <div className={Style.sidebarLinkIcon}>
                    <Icon />
                  </div>
                  <span>{item.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div className={Style.sidebarCard}>
          <div className={Style.siderCardCircle}>{sidebarCard.svg}</div>
          <h5 className="fontweight-700">{sidebarCard.title}</h5>
          <p>{sidebarCard.description}</p>
          <Link to={sidebarCard.linkPath} className={Style.sidebarProBtn}>
            {sidebarCard.linkText}
          </Link>
        </div>
      </div>
    </div>
  );
}
