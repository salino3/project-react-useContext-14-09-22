import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { MyProvider } from './context/MyProvider';
// npm i react-router-dom


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MyProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MyProvider>
  </React.StrictMode>
);


