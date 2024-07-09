import React, { useState } from 'react'
//components
import Logo from './Logo'
import Burger from './burger/Burger'
import Navbar from './Navbar'


const HeaderPage: React.FC = () => {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false)

  return (
    <header className='w-full h-20 flex items-center justify-between border-b-solid border-b border-b-main-color py-10'>
      <Burger isNavbarOpen={isNavbarOpen} setNavbarOpen={setNavbarOpen} />

      <Navbar isNavbarOpen={isNavbarOpen}>
        <h2>Navbar</h2>
      </Navbar>
      
      <Logo />
    </header>
  )
}

export default HeaderPage