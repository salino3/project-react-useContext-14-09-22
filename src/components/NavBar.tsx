import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/", { replace: true });
  };

  return (
    <>
      <div className="bg-warning text-white">
        <ul className="nav mynav">
          <li>
          <Link to={"/login"}>
            <button className="NavButton btn btn-primary">Home</button>
          </Link>
          </li>
          <li className="nav">
            <Link to={"#"}>1 ruta</Link>
          </li>
          <li className="nav">2 ruta</li>
          <li>3 ruta</li>
          <li onClick={handleLogout}>
            <Link to={"#"}>Log out</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar