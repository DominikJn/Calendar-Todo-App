import React, { useState, createContext, useContext } from 'react'
//modal components
import AddTaskForm from '../components/modals/AddTaskForm'


interface ContextProps {
    children: React.ReactNode
}

const AppContext = createContext({})

const AppContextProvider: React.FC<ContextProps> = ({ children }) => {
    //modal
    const [isModalOpen, setModalOpen] = useState<boolean>(false)
    const toggleModal = (): void => setModalOpen(!isModalOpen)

    const [modalContent, setModalContent] = useState<JSX.Element>(<AddTaskForm />)



    return (
        <AppContext.Provider value={{ 
            isModalOpen, toggleModal, 
            modalContent, setModalContent,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider

export const useAppContext = () => useContext(AppContext)