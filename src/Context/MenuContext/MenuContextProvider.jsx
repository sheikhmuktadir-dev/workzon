import { useState } from "react";
import { MenuContext } from "./MenuContext";

export default function MenuContextProvider({ children }) {
  const [barCollapse, setBarCollapse] = useState(false);

  const barCollapseHandler = () => {
    setBarCollapse((prev) => !prev);
  };

  return (
    <MenuContext.Provider
      value={{ barCollapse, setBarCollapse, barCollapseHandler }}
    >
      {children}
    </MenuContext.Provider>
  );
}
