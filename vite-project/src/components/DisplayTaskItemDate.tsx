import React from "react";
//utils
import formatDDMMYYYY from "../utils/formatDDMMYYYY";
import { checkIfTaskExpired, checkIfTaskExpiringToday } from "../utils/checkIfTaskExpired";

interface DisplayTaskItemDateProps {
  date: Date;
  time: string;
}

const DisplayTaskItemDate: React.FC<DisplayTaskItemDateProps> = ({
  time,
  date,
}) => {
  const isExpired = checkIfTaskExpired(date)
  const isExpiringToday = checkIfTaskExpiringToday(date, time);

  return (
    <div
      className={`${isExpired ? "text-red-600 font-bold" : "text-gray-500"}`}
    >
      <span className={`${isExpiringToday && "text-yellow-500 font-medium"}`}>
        {formatDDMMYYYY(new Date(date))} {time} {isExpired && "EXPIRED"}{" "}
        {isExpiringToday && "EXPIRING TODAY"}
      </span>
    </div>
  );
};

export default DisplayTaskItemDate;
