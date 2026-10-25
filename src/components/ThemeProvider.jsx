import { useEffect, useState } from "react";
import ThemeContext from "../contexts/ThemeContext.jsx";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("isDarkMode") === "true" ? "dark" : "light"
  );

  useEffect(() => {
    const isDarkMode = theme === "dark";
    document.body.style.backgroundColor = isDarkMode ? "#333333" : "#ffffff";
    document.body.style.color = isDarkMode ? "#ffffff" : "#000000";
    localStorage.setItem("isDarkMode", String(isDarkMode));
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;