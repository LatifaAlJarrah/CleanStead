import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage';
import Modal from './component/Controllers/Modal';
import Register from './component/Controllers/Register/Register';
import SignUp from './component/Controllers/SignUp/SignUp';

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
          <Route path="/signin" element={<Modal />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reg" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
