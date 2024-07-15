import React from 'react'

interface FieldsetProps {
    children: React.ReactNode,
    legend: string,
}

const Fieldset: React.FC<FieldsetProps> = ({ children, legend }) => {
  return (
    <fieldset
        className='
            border-solid border border-black dark:border-white rounded
            w-full flex flex-col items-center gap-3 p-4
        '
    >
        <legend className='text-2xl'>{legend}</legend>
        {children}
    </fieldset>

  )
}

export default Fieldset