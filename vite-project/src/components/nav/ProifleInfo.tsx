import React from "react";
//React Icons
import { CgProfile } from "react-icons/cg";
//utils
import getDataFromLocalStorage from "../../utils/local-storage/getDataFromLocalStorage";
//types
import { UserData } from "../../types/UserData";

const ProfileInfo: React.FC = () => {
  const userData: UserData = getDataFromLocalStorage("userData");

  return (
    <div className="flex flex-wrap items-center gap-2 overflow-hidden">
      <CgProfile size="50px" color="rgb(94, 145, 240)" />
      <h2 className="text-xl font-bold">{userData.name}</h2>
    </div>
  );
};

export default ProfileInfo;
