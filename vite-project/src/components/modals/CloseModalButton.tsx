import React from 'react'
//context
import { useAppContext } from '../../context/AppContextProvider'



const CloseModalButton: React.FC = () => {
    const { toggleModal } = useAppContext()
    return (
        <button 
            className='
                py-3 px-6 
                border-solid border border-black rounded
                hover:bg-gray-200 active:bg-gray-300
            '
            onClick={toggleModal}
        >
            Close Modal
        </button>
    )
}

export default CloseModalButton