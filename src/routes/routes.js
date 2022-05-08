import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Cadastrar from '../Pages/Cadastrar';

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
      </Routes>
    </Router>

  )
}

export default Rotas;