import React from "react";
//utils
import formatDDMMYYYY from "../utils/formatDDMMYYYY";
//types
import { Task } from "../types/Task";
//react icons
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
//context
import { useAppContext } from "../context/AppContextProvider";
//components
import ConfirmDelete from "./modals/ConfirmDelete";
import TaskEditionForm from "./modals/TaskEditionForm";

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { toggleModal, setModalContent } = useAppContext();

  function showDeleteModal(): void {
    toggleModal();
    setModalContent(<ConfirmDelete taskId={task.taskId} />);
  }

  function showEditModal(): void {
    toggleModal()
    setModalContent(<TaskEditionForm task={task} />)
  }

  return (
    <div className="w-3/5 m-1 border-solid border p-6 flex">
      <div className="flex-1 break-all">
        <h3 className="text-blue text-5xl font-bold">{task.title}</h3>
        <span className="text-gray-500">
          {formatDDMMYYYY(new Date(task.date))} {task.time}
        </span>
        <p className="text-3xl">{task.description}</p>
      </div>
      <div className="flex flex-col justify-between p-1">
        <button
          className="text-4xl hover:text-red-600"
          onClick={showDeleteModal}
        >
          <FaTrash />
        </button>
        <button
          className="text-4xl hover:text-red-600"
          onClick={showEditModal}
        >
          <MdEdit />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
