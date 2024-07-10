import React from "react"
//components
import Header from './components/Header'



interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="bg-bg-color text-main-color h-screen w-screen">
            <Header />
            {children}
        </div>
    )
}

export default Layout