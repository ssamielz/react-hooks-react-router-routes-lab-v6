// src/routes.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from "./Pages/Home";
import Actors from "./Pages/Actors";
import Directors from "./Pages/Directors";


const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actors" element={<Actors />} />
        <Route path="/directors" element={<Directors />} />
      </Routes>
    </Router>
  );
};

export default App;