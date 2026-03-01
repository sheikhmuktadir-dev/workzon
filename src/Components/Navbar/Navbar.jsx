import { Link, useLocation, matchPath } from "react-router-dom";
import Style from "./navbar.module.css";
import { LuSearch } from "react-icons/lu";
import { IoIosMoon } from "react-icons/io";
import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../Context/ThemeContext/ThemeContext";
import { IoSunnyOutline } from "react-icons/io5";
import { MenuContext } from "../../Context/MenuContext/MenuContext";
import useToggle from "../../CustomHooks/useToggle";
import { sidebarLinks } from "../../Data/Sidebar";
import { PiListBold } from "react-icons/pi";
import useLogout from "../../CustomHooks/useLogout";
import Person from "/images/person.webp";
import Wave from "/images/waving-hand.png";
import { userProfileLinks } from "../../Data/Navbar";

export default function Navbar() {
  const { themeHandler, theme } = useContext(ThemeContext);
  const { barCollapse, barCollapseHandler } = useContext(MenuContext);
  const { toggle, setToggle, toggleHandler } = useToggle();
  const { Logout } = useLogout();
  const profileRef = useRef(null);
  const location = useLocation();

  // click outside profile popup close
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        if (toggle) {
          toggleHandler();
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggle, toggleHandler]);

  // find current link or page
  const allLinks = [...sidebarLinks, ...userProfileLinks];

  const currentLink = allLinks.find((link) =>
    matchPath({ path: link.path, end: link.end }, location.pathname),
  );
  const pageName = currentLink?.name || "Page Not Found";

  // find user first name
  const userDetails = JSON.parse(localStorage.getItem("userfirstname"));

  return (
    <div
      className={`${Style.navbarMain} ${barCollapse ? Style.navbarMainExpand : ""}`}
    >
      <div className={Style.navLeft}>
        {pageName && (
          <>
            <ul className={Style.navListFlex}>
              <li>Pages</li>
              <li>/</li>
              <li>
                <Link to={location.pathname}>{pageName}</Link>
              </li>
            </ul>

            <h4 className="fontweight-700">{pageName}</h4>
          </>
        )}
      </div>

      <div className={Style.navRight}>
        <div className={Style.navSearchArea}>
          <div className={Style.navSearchIcon}>
            <LuSearch />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className={Style.navSearchBox}
          />
        </div>

        <button className={Style.navBtn} onClick={() => barCollapseHandler()}>
          <PiListBold />
        </button>

        <button className={Style.navBtn} onClick={() => themeHandler()}>
          {theme === "dark" ? <IoSunnyOutline /> : <IoIosMoon />}
        </button>

        <div className={Style.navbarProfile} ref={profileRef}>
          <img
            src={Person}
            alt="user image"
            className={Style.navbarProfileImage}
            onClick={() => toggleHandler()}
          />
          <div
            className={`${Style.navbarProfileBox} ${toggle ? Style.navbarProfileBoxShow : ""}`}
          >
            <div className={Style.navSearchBoxName}>
              <h6 className={`fontweight-700 ${Style.navSearchBoxNameFlex}`}>
                <img src={Wave} alt="hi image" />
                <span>
                  Hey, {userDetails ? userDetails.firstname : "Guest"}
                </span>
              </h6>
            </div>

            <ul className={Style.navbarProfileList}>
              {userProfileLinks?.map((item, index) => {
                return (
                  <li className={Style.navbarProfileItem}>
                    <Link
                      to={item.path}
                      key={item.name || index}
                      onClick={() => setToggle(false)}
                      className={Style.navbarProfileLink}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}

              <li className={Style.navbarProfileItem}>
                {userDetails ? (
                  <button
                    className={Style.navbarLogout}
                    onClick={() => Logout()}
                  >
                    Logout
                  </button>
                ) : (
                  <Link to="/sign-in" className={Style.navbarLogout}>
                    Sign In
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
