import React from "react"
//layout
import Layout from "./Layout"
//react-router
import { Routes, Route } from "react-router-dom"
//pages
import CalendarPage from "./pages/calendar/CalendarPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
//utils
import getDataFromLocalStorage from "./utils/local-storage/getDataFromLocalStorage"



const App: React.FC = () => {
  const userData = getDataFromLocalStorage('userData') || {}

  return (<>
      {userData?.isLogged
      ? 
        <Layout>
          <Routes>
            <Route path="/" element={<CalendarPage />} />
            <Route path="/login" element={<CalendarPage />} />
            <Route path="/register" element={<CalendarPage />} />
          </Routes>
        </Layout>
      : 
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
    }
  </>)
}

export default App
