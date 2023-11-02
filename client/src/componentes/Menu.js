import React from 'react';
import {  Link } from "react-router-dom";
const Navbar = () =>{
  return (
  <div>
    <li>
      <Link to="/Chat">Chat</Link>
    </li>
    <li>
      <Link to="/TestCommandPanel">Tablero de ejecución de pruebas</Link>
    </li>    
  </div>
  );
}
export default Navbar;