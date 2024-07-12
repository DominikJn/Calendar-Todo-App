import React from "react";
//react-router
import { useParams } from "react-router-dom";
//types
import { UserData } from "../types/UserData";
import { Task } from "../types/Task";
//utils
import getDataFromLocalStorage from "../utils/local-storage/getDataFromLocalStorage";
import fetchTasksAdnTransformDates from "../utils/fetchTasksAndTransformDates";
//tanstack query
import { useQuery } from "@tanstack/react-query";
//components
import TaskItem from "../components/TaskItem";
import TaskCreationButton from "../components/TaskCreationButton";

const TasksDisplayPage: React.FC = () => {
  const params = useParams();
  const userData: UserData = getDataFromLocalStorage("userData");

  const dateToMatch = new Date(params.date).toString();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["tasks", params.date],
    queryFn: () => {
      return fetchTasksAdnTransformDates(
        `http://localhost:3001/getTasks/${userData.userId}/${dateToMatch}`
      );
    },
  });

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <div className="mt-40 flex flex-col items-center">
      <TaskCreationButton date={new Date(params.date)} />
      {data?.map((task: Task, index: number) => (
        <TaskItem task={task} key={index} />
      ))}
    </div>
  );
};

export default TasksDisplayPage;
