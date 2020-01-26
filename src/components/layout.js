import React, { useEffect, createContext } from "react";

import { rhythm } from "../utils/typography";

import "../utils/global.css";
import "./layout.css";
import Header from "./header";
import Footer from "./footer";

const lightTheme = {
  "--color-text": "#994cc3",
  "--color-bg": "#f0f0f0",
  "--color-primary": "#EF5350",
  "--color-secondary": "#0c969b",
  "--color-header-bg": "rgba(255, 255, 255, 0.9)"
};
const darkTheme = {
  "--color-text": "#82AAFF",
  "--color-bg": "#011627",
  "--color-primary": "#c792ea",
  "--color-secondary": "#7fdbca",
  "--color-header-bg": "rgba(1, 10, 18, 0.9)"
};

export const ModeContext = createContext("light");

const Layout = props => {
  const { title, children } = props;
  const [currentMode, setCurrentMode] = React.useState("light");
  const [isChecked, setIsChecked] = React.useState(false);

  useEffect(() => {
    const theme = currentMode === "light" ? lightTheme : darkTheme;
    Object.keys(theme).forEach(key => {
      const value = theme[key];
      document.documentElement.style.setProperty(key, value);
    });
  }, [currentMode]);

  useEffect(() => {
    if (localStorage.getItem("mode") === "dark") {
      setCurrentMode("dark");
      setIsChecked(true);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = currentMode === "light" ? "dark" : "light";
    setIsChecked(!isChecked);
    setCurrentMode(newMode);
    localStorage.setItem("mode", newMode);
  };

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <ModeContext.Provider value={currentMode}>
        <Header title={title} toggleTheme={toggleTheme} isChecked={isChecked} />
        <main>{children}</main>
        <Footer />
      </ModeContext.Provider>
    </div>
  );
};

export default Layout;
