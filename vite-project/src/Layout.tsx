import React from "react";
//components
import Header from "./components/Header";
import Modal from "./components/modals/Modal";
//toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useDarkMode from "./hooks/useDarkMode";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isDarkMode] = useDarkMode()
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen w-full transition-all">
      <Header />
      <main className="w-full flex justify-center">
        {children}
      </main>
      <Modal />
      <ToastContainer
        position="bottom-right"
        pauseOnHover={false}
        theme={isDarkMode ? 'dark' : 'light'}
      />
    </div>
  );
};

export default Layout;
