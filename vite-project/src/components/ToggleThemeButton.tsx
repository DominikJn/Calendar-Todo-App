import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";

const ToggleThemeButton: React.FC = () => {
  const [isDarkMode, setDarkMode] = useDarkMode();
  return (
    <div className="flex items-center gap-2">
      <button className="text-3xl" onClick={() => setDarkMode(!isDarkMode)}>
        {isDarkMode ? <FaMoon /> : <FaSun />}
      </button>
      <span>{isDarkMode ? "Dark" : "Light"}</span>
    </div>
  );
};

export default ToggleThemeButton;
