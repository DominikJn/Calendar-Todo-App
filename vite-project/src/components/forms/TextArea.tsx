import React from "react";
import { Path, UseFormRegister } from "react-hook-form";

type TextAreaProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required?: boolean;
  defaultValue?: string;
  placeholder?: string;
};

const TextArea: React.FC<TextAreaProps> = ({
  label,
  register,
  required,
  defaultValue,
  placeholder,
}) => {
  return (
    <>
      <textarea
        {...register(label, { required })}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="
            dark:bg-black dark:text-white
              w-[95%] h-[100px] border-solid border rounded 
              py-3 px-5 text-2xl resize-none
              text-main-color bg-bg-color
            "
      ></textarea>
    </>
  );
};

export default TextArea;
