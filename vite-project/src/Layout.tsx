import React from "react"
//components
import Header from './components/Header'
import Modal from "./components/modals/Modal"
//context
import { useAppContext } from "./context/AppContextProvider"



interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { toggleModal } = useAppContext()
    return (
        <div className="bg-bg-color text-main-color h-screen w-screen">
            <Header />
            {children}
            <button onClick={toggleModal}>click</button>
            <Modal />
        </div>
    )
}

export default Layout