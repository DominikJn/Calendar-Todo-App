import React from "react";
//React Icons
import { CgProfile } from "react-icons/cg";
//utils
import getDataFromLocalStorage from "../../utils/local-storage/getDataFromLocalStorage";
//types
import { UserData } from "../../types/UserData";
//react router
import { Link } from "react-router-dom";

const ProfileInfo: React.FC = () => {
  const userData: UserData = getDataFromLocalStorage("userData");

  return (
    <Link to='/profile'>
    <div
      className="
        flex flex-wrap items-center gap-2 
        border-solid border-black border rounded-full 
        py-1 px-2 mr-4
      "
    >
      <h2 className="text-xl font-bold">{userData.name}</h2>
      <CgProfile size="50px" color="rgb(94, 145, 240)" />
    </div>
    </Link>
  );
};

export default ProfileInfo;
