import React from "react";

interface SubmitProps {
  isLoading: boolean;
  value: string;
}

const SubmitInput: React.FC<SubmitProps> = ({ isLoading, value }) => {
  return (
    <input
      type="submit"
      value={value}
      disabled={isLoading && true}
      className="py-3 px-6 border-solid border border-blue rounded text-xl text-white bg-blue hover:cursor-pointer active:bg-blue-active"
    />
  );
};

export default SubmitInput;
