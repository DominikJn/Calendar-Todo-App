import React from 'react'
import { NavLink } from 'react-router-dom'

interface NavLinkItemProps {
    path: string,
    innerText: string,
    icon: JSX.Element,
    toggleNavbar: () => void
}

const NavLinkItem: React.FC<NavLinkItemProps> = ({ path, innerText, icon, toggleNavbar }) => {
  return (
    <NavLink to={path}>
      <div 
        className='flex items-center gap-2 text-blue'
        onClick={toggleNavbar}
      >
        <span className='text-3xl'>{icon}</span>
        <span className='text-2xl'>{innerText}</span>
      </div>
    </NavLink>
  )
}

export default NavLinkItem