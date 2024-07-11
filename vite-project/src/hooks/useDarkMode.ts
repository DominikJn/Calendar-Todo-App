import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect } from "react";

const useDarkMode = () => {
  const [isDarkMode, setDarkMode] = useLocalStorage<boolean>("isDarkMode",false);

  useEffect(() => {
    const bodyClass = document.body.classList;
    isDarkMode ? bodyClass.add("dark") : bodyClass.remove("dark");
  }, [isDarkMode]);

  return [isDarkMode, setDarkMode];
};

export default useDarkMode;
