import React from 'react'
import { FieldErrors } from 'react-hook-form'


interface ErrorMessageProps {
    errors: FieldErrors<any>,
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errors }) => {
  return (
    <>
        {errors.root && <p className="text-red-600 font-medium">{errors.root.message}</p>}
    </>
  )
}

export default ErrorMessage