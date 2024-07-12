import { useEffect } from "react";
//other hooks
import { useLocalStorage } from "@uidotdev/usehooks";
//axios
import axios from "axios";
//types
import { UserData } from "../types/UserData";
//utils
import getDataFromLocalStorage from "../utils/local-storage/getDataFromLocalStorage";

const useDarkMode = () => {
  const userData: UserData = getDataFromLocalStorage("userData");
  const [isDarkMode, setDarkMode] = useLocalStorage<boolean>(
    "isDarkMode",
    false
  );

  useEffect(() => {
    axios.patch(`http://localhost:3001/updateTheme/${userData.userId}`, {
      isDarkMode: isDarkMode,
    }).then(response => console.log(response.data))
    const bodyClass = document.body.classList;
    isDarkMode ? bodyClass.add("dark") : bodyClass.remove("dark");
  }, [isDarkMode]);

  return [isDarkMode, setDarkMode];
};

export default useDarkMode;
