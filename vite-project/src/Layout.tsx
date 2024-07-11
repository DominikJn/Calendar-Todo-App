import React, { useEffect } from "react";
//components
import Header from "./components/Header";
import Modal from "./components/modals/Modal";
//context
import { useAppContext } from "./context/AppContextProvider";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { toggleModal } = useAppContext();
  useEffect(() => document.body.classList.add("dark"), []);
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white h-screen w-screen">
      <Header />
      {children}
      <button onClick={toggleModal}>click</button>
      <Modal />
    </div>
  );
};

export default Layout;
