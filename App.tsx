import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RootLayout from "./layouts/RootLayout";
import AppShellDefault from "./components/AppShell/AppShell";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import TaskList from "./pages/tasklist";

function App() {
  return (
    <ThemeProvider >
      <BrowserRouter>
       
        <Routes>

          <Route path="/" element={<AppShellDefault />}>  
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="tasklist" element={<TaskList />} />
          </Route>

          <Route path="/" element={<RootLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          </Route>
       
        </Routes>
      
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
