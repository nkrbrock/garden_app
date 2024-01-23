import React, {Component} from "react";
import { BrowserRouter as Router, Route, Routes, redirect } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Portal from "./components/Portal";
import Register from "./components/Register";
import NotFound from "./components/NotFound";

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="user" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App;
