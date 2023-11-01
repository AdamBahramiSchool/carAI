import './App.css';
import React from 'react';
import Home from './pages/Home'
import ThreejsLamb from './components/ThreejsLamb';
import Test from './components/Test.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lamb" element={< ThreejsLamb/>} />
      </Routes>
    </Router>
  );
}

export default App;