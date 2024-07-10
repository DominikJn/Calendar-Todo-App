import React from 'react';



interface NavbarProps {
  children: React.ReactNode,
  isNavbarOpen: boolean,
}

const Navbar: React.FC<NavbarProps> = ({ children, isNavbarOpen }) => {
  return (
    <nav 
      style={{left: isNavbarOpen ? '0px' : '-570px'}}
      className='
        absolute top-[86px] z-40 w-[250px] h-[calc(100vh_-_86px)]
        border-r-solid border-r border-r-main-blue
        flex flex-col gap-[10px] bg-bg-color
        list-none p-[20px] duration-300
      '
    >
      {children}
    </nav>
  )
}

export default Navbar