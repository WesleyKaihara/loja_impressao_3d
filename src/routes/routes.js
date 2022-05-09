import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Cadastrar from '../Pages/Cadastrar';
import Conta from '../Pages/Conta';
import Produto from '../Pages/Produto';

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/conta" element={<Conta />} />
        <Route path="/Produto" element={<Produto />} />
      </Routes>
    </Router>

  )
}

export default Rotas;