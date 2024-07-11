import React from "react";
//components
import Header from "./components/Header";
import Modal from "./components/modals/Modal";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white h-screen w-screen">
      <Header />
      {children}
      <Modal />
    </div>
  );
};

export default Layout;
