import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/couches">Couches</NavLink></li>
        <li><NavLink to="/chairs">Chairs</NavLink></li>
        <li><NavLink to="/lightbulbs">Light Bulbs</NavLink></li>
        <li><NavLink to="/surpriseme">Surprise me</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
