import React, { useState } from "react";
//components
import Logo from "./Logo";
import Burger from "./burger/Burger";
import Navbar from "./nav/Navbar";
import ProfileInfo from "./nav/ProifleInfo";
import LogOutButton from "./nav/LogOutButton";
import ToggleThemeButton from "./ToggleThemeButton";

const HeaderPage: React.FC = () => {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <header className="w-full h-20 flex items-center justify-between border-b-solid border-b py-10">
      <Burger isNavbarOpen={isNavbarOpen} setNavbarOpen={setNavbarOpen} />

      <Navbar isNavbarOpen={isNavbarOpen}>
        <ProfileInfo />
        <ToggleThemeButton />
        <LogOutButton />
      </Navbar>

      <Logo />
    </header>
  );
};

export default HeaderPage;
