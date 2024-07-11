import React, { useState, createContext, useContext } from "react";
//modal components
import TaskCreationForm from "../components/modals/TaskCreationForm";

interface ContextProps {
  children: React.ReactNode;
}

const AppContext = createContext({});

const AppContextProvider: React.FC<ContextProps> = ({ children }) => {
  //modal
  const [modalContent, setModalContent] = useState<JSX.Element>(
    <TaskCreationForm />
  );
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const toggleModal = (): void => setModalOpen(!isModalOpen);
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppContext = () => useContext(AppContext);
