import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar">
      <Link to="/Home" className="logo">Home</Link>
      <Link to="/Registration">¡Únete!</Link>
      <Link to="/Login">Inicia sesión</Link>
    </nav>
  );
};
export default Header;
