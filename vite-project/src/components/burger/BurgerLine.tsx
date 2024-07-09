import React from 'react'



interface BurgerLineProps {
    top: string,
    transform: string,
}

const BurgerLine: React.FC<BurgerLineProps> = ({ top, transform }) => {
  return (
    <div
        className='h-[4px] w-[32px] bg-main-blue-active absolute left-0 duration-300'
        style={{ top: top, transform: transform }}
    >

    </div>
  )
}

export default BurgerLine