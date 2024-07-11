import React from "react";
//context
import { useAppContext } from "../../context/AppContextProvider";
//components
import TaskCreationForm from "./TaskCreationForm";

const CloseModalButton: React.FC = () => {
  const { toggleModal, setModalContent } = useAppContext();

  function handleCLick(): void {
    toggleModal();
    //set to default content on modal close
    //it forces edition button in TaskItem component to render new TaskEditionForm 
    //with proper task values passed as props
    setModalContent(<TaskCreationForm />);
  }
  return (
    <button
      className="
                py-3 px-6 mt-2 text-2xl
                border-solid border rounded-2xl
                hover:bg-gray-200 active:bg-gray-300
                dark:hover:bg-gray-800 dark:active:bg-gray-900
            "
      onClick={handleCLick}
    >
      Close Modal
    </button>
  );
};

export default CloseModalButton;
