import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage'
import LoginAdmin from './component/LoginAdmin'
import ContactUsPage from './pages/ContactUsPage/ContactUsPage'
import ServicePage from './pages/ServicePage/ServicePage'
import BookingPage from './pages/BookPage/BookingPage'

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
          <Route path="/admin" element={<LoginAdmin />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
