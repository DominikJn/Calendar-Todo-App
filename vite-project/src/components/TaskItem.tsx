//react
import React from "react";
//utils
import formatDDMMYYYY from "../utils/formatDDMMYYYY";
//types
import { Task } from "../types/Task";

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <div className="w-3/5 m-1 border-solid border p-6 flex">
      <div className="flex-1 break-all">
        <h3 className="text-blue text-5xl font-bold">{task.title}</h3>
        <span className="text-gray-500">
          {formatDDMMYYYY(new Date(task.date))} {task.time}
        </span>
        <p className="text-3xl">{task.description}</p>
      </div>
    </div>
  );
};

export default TaskItem;
