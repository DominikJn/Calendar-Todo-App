import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";

const ToggleThemeButton: React.FC = () => {
  const [isDarkMode, setDarkMode] = useDarkMode();
  return (
    <button
      className="text-2xl flex items-center gap-2 border-solid border rounded-full w-fit py-1 px-4"
      onClick={() => setDarkMode(!isDarkMode)}
    >
      <span>{isDarkMode ? <FaMoon /> : <FaSun />}</span>
      <span>{isDarkMode ? "Dark" : "Light"}</span>
    </button>
  );
};

export default ToggleThemeButton;
