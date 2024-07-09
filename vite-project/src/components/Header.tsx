import React from 'react'
//components
import Logo from './Logo'



const HeaderPage: React.FC = () => {
  return (
    <header className='w-full h-20 flex items-center justify-between border-b-solid border-b border-b-main-color py-10'>
      <Logo />
    </header>
  )
}

export default HeaderPage