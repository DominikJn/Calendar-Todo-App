//react
import React, { useEffect, useState } from 'react'
//components
import BurgerLine from './BurgerLine'



interface BurgerProps {
    isNavbarOpen: boolean,
    toggleNavbar: () => void,
}

type BurgerStyle = {
    [key: string]: string,
}

const burgerActive: BurgerStyle = {
    upperLine: '10px',
    middleLine: '10px',
    bottomLine: '10px',
    upperLineRotate: 'rotate(45deg)',
    bottomLineRotate: 'rotate(135deg)',
}

const burgerDisabled: BurgerStyle = {
    upperLine: '0px',
    middleLine: '10px',
    bottomLine: '20px',
    upperLineRotate: 'none',
    bottomLineRotate: 'none',
}

const Burger: React.FC<BurgerProps> = ({ isNavbarOpen, toggleNavbar }) => {
    const [burgerStyling, setBurgerStyling] = useState<BurgerStyle>(burgerDisabled)

    useEffect(() => {
        isNavbarOpen 
            ? setBurgerStyling(burgerActive) 
            : setBurgerStyling(burgerDisabled)
    }, [isNavbarOpen])

    return (
        <button
            onClick={toggleNavbar}
            className='h-[24px] w-[32px] border-none ml-[10px] cursor-pointer relative'
        >
            <BurgerLine
                top={burgerStyling.upperLine}
                transform={burgerStyling.upperLineRotate}
            />
            <BurgerLine
                top={burgerStyling.middleLine}
                transform={burgerStyling.bottomLineRotate}
            />
            <BurgerLine
                top={burgerStyling.bottomLine}
                transform={burgerStyling.bottomLineRotate}
            />
        </button>
    )
}

export default Burger