import './App.css';
import React from 'react';
import Home from './pages/Home'
import CarDisplay from './pages/CarDisplay';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car" element={<CarDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;