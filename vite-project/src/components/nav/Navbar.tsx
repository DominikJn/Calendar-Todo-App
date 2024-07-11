import React from "react";

interface NavbarProps {
  children: React.ReactNode;
  isNavbarOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ children, isNavbarOpen }) => {
  return (
    <nav
      className={`
        absolute top-[86px] ${isNavbarOpen ? "left-0" : "left-[-570px]"}
        z-40 w-[250px] h-[calc(100vh_-_86px)]
        border-r-solid border-r border-r-main-blue
        flex flex-col gap-4 bg-bg-color
        list-none p-5 duration-300
        bg-white dark:bg-black
      `}
    >
      {children}
    </nav>
  );
};

export default Navbar;
