import React from 'react'



interface SubmitProps {
    isLoading: boolean,
    value: string,
}

const SubmitInput: React.FC<SubmitProps> = ({ isLoading, value }) => {
  return (
    <input
        type="submit"
        value={value}
        disabled={isLoading && true}
        className="py-2.5 px-5 border-solid border border-main-blue rounded text-xl text-white bg-main-blue hover:cursor-pointer active:bg-main-blue-active"
    />
  )
}

export default SubmitInput