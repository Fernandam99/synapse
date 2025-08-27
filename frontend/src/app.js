// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Index from './Index.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Mision from './mission.jsx';   

import './css/style.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* 👇 Que el root "/" vaya al index */}
        <Route path="/" element={<Navigate to="/index" replace />} />
        <Route path="/index" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mision" element={<Mision />} /> 
        <Route path="*" element={<Navigate to="/index" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
