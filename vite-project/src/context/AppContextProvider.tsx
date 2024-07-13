import React, { useState, createContext, useContext } from "react";
//modal components
import TaskCreationForm from "../components/modals/TaskCreationForm";
//types
import { UserData } from "../types/UserData";

interface ContextProps {
  children: React.ReactNode;
}

const AppContext = createContext({});

const AppContextProvider: React.FC<ContextProps> = ({ children }) => {
  //user data
  const [userData, setUserData] = useState<UserData | {}>({})
  //modal
  const [modalContent, setModalContent] = useState<JSX.Element>(<TaskCreationForm />);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  function toggleModal(): void {
    setModalOpen(!isModalOpen);
    setModalContent(<TaskCreationForm />);
  }
  //selected date
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        toggleModal,
        modalContent,
        setModalContent,
        selectedDate,
        setSelectedDate,
        userData,
        setUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppContext = () => useContext(AppContext);
