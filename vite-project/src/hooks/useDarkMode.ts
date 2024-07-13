import { useEffect } from "react";
//other hooks
import { useLocalStorage } from "@uidotdev/usehooks";
//utils
import api from "../utils/api";

const useDarkMode = () => {
  const [isDarkMode, setDarkMode] = useLocalStorage<boolean>(
    "isDarkMode",
    false
  );

  useEffect(() => {
    api.patch(`users/profile/theme`, { isDarkMode: isDarkMode });
    const bodyClass = document.body.classList;
    isDarkMode ? bodyClass.add("dark") : bodyClass.remove("dark");
  }, [isDarkMode]);

  return [isDarkMode, setDarkMode];
};

export default useDarkMode;
