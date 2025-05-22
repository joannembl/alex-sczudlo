import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router';
import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import AutomotivePricing from './components/AutomotivePricing';
import OtherServices from './components/OtherServices';
import Affiliates from './components/Affiliates';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/about-me" element={<AboutMe />}/>
        <Route path="/auto-pricing" element={<AutomotivePricing />}/>
        <Route path="/other-pricing" element={<OtherServices />}/>
        <Route path="/affiliates" element={<Affiliates />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
