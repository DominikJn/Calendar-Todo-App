import React from "react";
//layout
import Layout from "./Layout";
//react-router
import { Routes, Route } from "react-router-dom";
//pages
import CalendarPage from "./pages/calendar/CalendarPage";
import TasksDisplayPage from "./pages/TaskDisplayPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
//utils
import getDataFromLocalStorage from "./utils/local-storage/getDataFromLocalStorage";
//types
import { UserData } from "./types/UserData";
//context
import AppContextProvider from "./context/AppContextProvider";

const App: React.FC = () => {
  const userData: UserData = getDataFromLocalStorage("userData") || {};

  return (
    <AppContextProvider>
      {'name' in userData ? (
        <Layout>
          <Routes>
            <Route path="/" element={<CalendarPage />} />
            <Route path='/tasks/:date' element={<TasksDisplayPage />} />
            <Route path="/login" element={<CalendarPage />} />
            <Route path="/register" element={<CalendarPage />} />
          </Routes>
        </Layout>
      ) : (
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      )}
    </AppContextProvider>
  );
};

export default App;
