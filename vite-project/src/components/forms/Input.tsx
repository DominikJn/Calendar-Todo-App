import React from "react";
import { Path, UseFormRegister } from "react-hook-form";

type InputProps = {
  type: string;
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required?: boolean;
  defaultValue?: any;
  placeholder?: string;
  disabled?: boolean;
};

const Input: React.FC<InputProps> = ({
  type,
  label,
  register,
  required,
  defaultValue,
  placeholder,
  disabled,
}) => {
  return (
    <>
      <input
        type={type}
        {...register(label, { required })}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        className="
          dark:bg-black dark:text-white
          w-[95%] border-solid border rounded 
          py-3 px-5 text-2xl bg-bg-color
        "
      />
    </>
  );
};

export default Input;
