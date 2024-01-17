import React, {Component} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Portal from "./components/Portal";
import Register from "./components/Register";

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="user" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;
