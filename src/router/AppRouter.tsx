import React, { useState } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import PageRouter from './PageRouter';
import Login from '../pages/Login';
import { Booleano } from "../hooks/Booleano";
import FirstPage from '../pages/FirstPage';



// interface Props {
//   setValidacion: React.Dispatch<React.SetStateAction<boolean>>;
// }

const AppRouter = () => {

 return (
    <>

      <Routes>
       
          <Route path="login/*" element={<Login />} />
 
          <Route path="/*" element={<PageRouter  />}/>
  
      </Routes>
    </>
  );
};

export default AppRouter

// <Navigate to="/"  />















