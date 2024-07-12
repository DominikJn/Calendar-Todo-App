import React, { useEffect } from "react";
//components
import TaskCreationForm from "./modals/TaskCreationForm";
//react icons
import { FaPlus } from "react-icons/fa6";
//context
import { useAppContext } from "../context/AppContextProvider";

interface TaskCreationButtonProps {
  date: Date;
}

const TaskCreationButton: React.FC<TaskCreationButtonProps> = ({ date }) => {
  const { toggleModal, setModalContent, setSelectedDate } = useAppContext();

  function handleClick() {
    toggleModal();
    setModalContent(<TaskCreationForm />);
  }

  //set date from url passed by parent component
  useEffect(() => {
    setSelectedDate(date);
  }, []);

  return (
    <button
      onClick={handleClick}
      className="
        flex items-center gap-2 
        text-4xl bg-blue text-white
        border-solid border-2
        rounded-full w-[250px] h-[70px] 
        active:bg-blue-active"
    >
      <FaPlus className="border-solid border-2 rounded-full text-5xl w-[70px] h-[70px]" />
      <span>Add Task</span>
    </button>
  );
};

export default TaskCreationButton;
