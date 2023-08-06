import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage';

import "./fonts.css";

const App = () => {

  const isRTL = true;
  return (
    <Router>
      <div dir={isRTL ? 'rtl' : 'ltr'}
        style={{ fontFamily: 'CustomFont'}}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
