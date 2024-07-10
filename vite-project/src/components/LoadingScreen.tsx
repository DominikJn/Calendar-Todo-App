import React from 'react'
//spinners
import ClipLoader from "react-spinners/ClipLoader";



const LoadingScreen: React.FC = () => {
  return (
    <div className='w-full h-full grid place-items-center'>
      <ClipLoader />
    </div>
  )
}

export default LoadingScreen