import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Cadastrar from '../Pages/Cadastrar';
import Conta from '../Pages/Conta';
import Produto from '../Pages/Produto';
import Contato from '../Pages/Contato';

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/conta" element={<Conta />} />
        <Route path="/Produto" element={<Produto />} />
        <Route path="/Contato" element={<Contato />} />
      </Routes>
    </Router>

  )
}

export default Rotas;