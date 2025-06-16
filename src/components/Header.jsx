import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-orange-600 to-amber-300 text-white p-4 text-center text-2xl font-bold flex justify-between items-center">
      
      <Link to="/" className="mr-4">🏠 Home</Link>
      <Link to="/">🍽️ Recipe Choices 🍽️</Link>
      <Link to="/favorites">❤️ Favorites</Link>
    </header>
  );
};

export default Header;
