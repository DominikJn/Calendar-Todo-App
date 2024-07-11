import React from "react";
//react icons
import { FaCloud } from "react-icons/fa";

const Logo: React.FC = () => {
  return (
    <div className="pr-10 flex items-center gap-1 text-blue text-2xl font-bold">
      <FaCloud size="40px" />
      <h1>MyCalendar</h1>
    </div>
  );
};

export default Logo;
