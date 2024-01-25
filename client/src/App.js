import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Portal from "./components/Portal";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const setAuth = boolean => {
    setAuthenticated(boolean);
  };

  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<Portal />}/>
        <Route 
          exact 
          path="/login" 
          element={!isAuthenticated ? <Login setAuth={setAuth}/> : <Navigate to="/dashboard" />}/
        >
        <Route 
          exact 
          path="/register" 
          element={!isAuthenticated ? <Register setAuth={setAuth}/>: <Navigate to="/dashboard"/>}
        />
        <Route 
          exact 
          path="/dashboard" 
          element={isAuthenticated ? <Dashboard setAuth={setAuth}/> : <Navigate to="/"/>}
        />
        <Route exact path="/*" element={<NotFound />}/>
      </Routes>
    </Router>
  );
}

export default App;
