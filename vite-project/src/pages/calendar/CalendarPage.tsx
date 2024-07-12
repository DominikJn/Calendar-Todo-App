import React, { MouseEvent, useState } from "react";
//react-calendar
import Calendar from "react-calendar";
//css
import "./CalendarPage.css";
//utils
import getDataFromLocalStorage from "../../utils/local-storage/getDataFromLocalStorage";
import fetchTasksAdnTransformDates from "../../utils/fetchTasksAndTransformDates";
import formatDDMMYYYY from "../../utils/formatDDMMYYYY";
import toLocalISOString from "../../utils/toLocalISOString";
import { checkIfTaskExpired, checkIfTaskExpiringToday } from "../../utils/checkIfTaskExpired";
//types
import { UserData } from "../../types/UserData";
//tanstack query
import { useQuery } from "@tanstack/react-query";
//types
import { Task } from "../../types/Task";
//components
import LoadingScreen from "../../components/LoadingScreen";
//context
import { useAppContext } from "../../context/AppContextProvider";
//react router
import { useNavigate } from "react-router-dom";

interface TaskDates {
  [key: string]: number;
}

const CalendarPage: React.FC = () => {
  const userData: UserData = getDataFromLocalStorage("userData");
  const { toggleModal, setSelectedDate } = useAppContext();
  const [tasks, setTasks] = useState<Task[]>([]);
  const query = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const data = await fetchTasksAdnTransformDates(
        `http://localhost:3001/getTasksDisplayInfo/${userData.userId}`
      );
      setTasks(data);
      return data;
    },
  });

  const taskDates: TaskDates = tasks.reduce((acc: TaskDates, task: Task) => {
    const date = formatDDMMYYYY(new Date(task.date));
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  function checkForDateInTasks(date: Date): Task | undefined {
    return tasks.find(
      (task: Task) => toLocalISOString(task.date) === toLocalISOString(date)
    );
  }

  function handlePlusClick(date: Date): void {
    toggleModal();
    setSelectedDate(date);
  }

  function handleTileContent(date: Date): React.ReactElement {
    const taskCount = taskDates[formatDDMMYYYY(date)] || 0;
    if (checkForDateInTasks(date)) {
      for (let task of tasks) {
        if (toLocalISOString(task.date) === toLocalISOString(date)) {
          return (
            <>
              <p className="tile-title">{task.title}</p>
              {taskCount > 1 && (
                <p className="more">+{taskCount - 1} more...</p>
              )}
              <div className="show-modal" onClick={() => handlePlusClick(date)}>
                +
              </div>
            </>
          );
        }
      }
    }
    return (
      <div className="show-modal" onClick={() => handlePlusClick(date)}>
        +
      </div>
    );
  }

  const navigate = useNavigate();
  function handleOnClickDay(
    value: Date,
    e: MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    if (!e.target.classList.contains("show-modal")) {
      const date = toLocalISOString(value);
      navigate(`/tasks/${date}`);
    }
  }

  function highlightTasks(date: Date): string {
    const isExpired = checkIfTaskExpired(date)
    if(checkForDateInTasks(date) && isExpired) return "highlight expired"
    else if(checkForDateInTasks(date)) return "highlight"
    else return ''
  }

  if (query.isLoading) return <LoadingScreen />;
  if (query.isError) return <div>{query.error.message}</div>;

  return (
    <Calendar
      view="month"
      locale="en-EN"
      tileContent={({ date }) => handleTileContent(date)}
      tileClassName={({ date }) => highlightTasks(date)}
      onClickDay={(value, e) => handleOnClickDay(value, e)}
    />
  );
};

export default CalendarPage;
