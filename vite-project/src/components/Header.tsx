import React, { useState } from "react";
//components
import Logo from "./Logo";
import Burger from "./burger/Burger";
import Navbar from "./nav/Navbar";
import ProfileInfo from "./nav/ProifleInfo";
import LogOutButton from "./nav/LogOutButton";
import ToggleThemeButton from "./ToggleThemeButton";
import NavLinkItem from "./nav/NavLinkItem";
//react icons
import { IoHome } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const HeaderPage: React.FC = () => {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);

  const toggleNavbar = (): void => setNavbarOpen(!isNavbarOpen)

  return (
    <header className="w-full h-20 flex items-center justify-between border-b-solid border-b py-10">
      <Burger isNavbarOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />

      <Navbar isNavbarOpen={isNavbarOpen}>
        <Logo />
        <ToggleThemeButton />
        <NavLinkItem 
          path="/"
          innerText="Home"
          icon={<IoHome />}
          toggleNavbar={toggleNavbar}
        />
        <NavLinkItem 
          path="/profile"
          innerText="Profile"
          icon={<CgProfile />}
          toggleNavbar={toggleNavbar}
        />
        <LogOutButton />
      </Navbar>

      <ProfileInfo />
    </header>
  );
};

export default HeaderPage;
