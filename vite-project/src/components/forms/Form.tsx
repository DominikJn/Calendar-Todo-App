import React from "react";
import { UseFormHandleSubmit } from "react-hook-form";

interface FormProps {
  handleSubmit: UseFormHandleSubmit<any, undefined>;
  onSubmit: (data: any) => void;
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ handleSubmit, onSubmit, children }) => {
  return (
    <form
      className="border-solid border rounded-2xl flex flex-col items-center gap-5 py-4 px-3 mt-5 w-full"
      onSubmit={handleSubmit((data) => onSubmit(data))}
    >
      {children}
    </form>
  );
};

export default Form;
