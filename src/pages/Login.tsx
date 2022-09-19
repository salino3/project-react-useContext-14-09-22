import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBar';
import NotFound from '../components/NotFound';
import SecondPage from './SecondPage';

const Login = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<SecondPage/>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Login