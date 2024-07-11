import React from 'react'
import { Path, UseFormRegister } from 'react-hook-form'



type TextAreaProps = {
    label: Path<IFormValues>,
    register: UseFormRegister<IFormValues>,
    required?: boolean,
    defaultValue?: string,
    placeholder?: string,
}

const TextArea: React.FC<TextAreaProps> = ({ label, register, required, defaultValue, placeholder }) => {
  return (
    <>
        <textarea
            {...register(label, { required })} 
            defaultValue={defaultValue}
            placeholder={placeholder}
            className='
              w-[95%] h-[100px] border-solid border border-gray-500 rounded 
              py-3 px-5 text-2xl resize-none
              text-main-color bg-bg-color
            '
        >
        </textarea>
    </>
  )
}

export default TextArea