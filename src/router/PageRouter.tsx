import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import NotFound from '../components/NotFound';
import FirstPage from '../pages/FirstPage';




const PageRouter = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<FirstPage  />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default PageRouter