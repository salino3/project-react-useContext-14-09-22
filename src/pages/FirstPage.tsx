import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import {Booleano} from '../hooks/Booleano';




const FirstPage = () => {

   const { setValidacion, validacion } = Booleano();


//   const [validacion, setValidacion] = useState(false);

  const handleChange = () => {
    setValidacion(!validacion);
  };

  return (
    <>
      PageRouter
      {validacion ? (
        <>
          <h3 className="mt-2">Login</h3>{" "}
          <Link to={"/login"}>
            <button className="btn btn-warning rounded btn-lg m-5 text-white">
              Entra
            </button>
          </Link>
        </>
      ) : (
        //
        <>
          <h3 className="mt-2">Logout</h3>
          <Link to={"/"}>
            <button className="btn btn-warning rounded btn-lg m-5 text-white">
              Entra
            </button>
          </Link>
        </>
      )}
      {/*  */}
      <button onClick={handleChange} className="btn btn-dark">
        Change true/false for enter
      </button>
    </>
  );
};

export default FirstPage;

