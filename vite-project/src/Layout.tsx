import React from "react"
//components
import Header from './components/Header'
//pages
import CalendarPage from "./pages/calendar/CalendarPage"



const Layout: React.FC = () => {
    return (
        <div className="bg-bg-color text-main-color h-screen w-screen">
            <Header />
            <CalendarPage />
        </div>
    )
}

export default Layout