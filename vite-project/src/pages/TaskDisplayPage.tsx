import React from "react";
//react-router
import { useParams } from "react-router-dom";
//types
import { Task } from "../types/Task";
//utils
import fetchTasksAdnTransformDates from "../utils/fetchTasksAndTransformDates";
//tanstack query
import { useQuery } from "@tanstack/react-query";
//components
import TaskItem from "../components/TaskItem";
import TaskCreationButton from "../components/TaskCreationButton";

const TasksDisplayPage: React.FC = () => {
  const params = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["tasks", params.date],
    queryFn: async () => {
      const data = await fetchTasksAdnTransformDates(`tasks/getTasks/${params.date}`);
      console.log(data)
      return data
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
