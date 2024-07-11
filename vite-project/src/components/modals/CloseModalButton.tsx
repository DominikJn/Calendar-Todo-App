import React from 'react'
//context
import { useAppContext } from '../../context/AppContextProvider'



const CloseModalButton: React.FC = () => {
    const { toggleModal } = useAppContext()
    return (
        <button 
            className='
                py-3 px-6 mt-2 text-2xl
                border-solid border rounded-2xl
                hover:bg-gray-200 active:bg-gray-300
                dark:hover:bg-gray-800 dark:active:bg-gray-900
            '
            onClick={toggleModal}
        >
            Close Modal
        </button>
    )
}

export default CloseModalButton