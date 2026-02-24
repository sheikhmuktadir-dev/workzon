import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("workzonetheme") || "light",
  );

  const themeHandler = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("workzonetheme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ themeHandler, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
