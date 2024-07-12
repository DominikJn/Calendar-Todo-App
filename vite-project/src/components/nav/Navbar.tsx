import React from "react";

interface NavbarProps {
  children: React.ReactNode;
  isNavbarOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ children, isNavbarOpen }) => {
  return (
    <nav
      className={`
        absolute top-[86px] ${isNavbarOpen ? "left-0" : "left-[-250px]"}
        z-40 w-[250px] h-[calc(100vh_-_86px)]
        border-r-solid border-r border-blue
        flex flex-col gap-4 bg-bg-color
        list-none p-5
        bg-white dark:bg-black
        transition-all
      `}
    >
      {children}
    </nav>
  );
};

export default Navbar;
