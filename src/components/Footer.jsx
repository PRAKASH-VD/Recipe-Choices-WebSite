import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full  bg-gray-800 text-white text-center py-4 mt-10">
      <p className="text-sm">
        🍽️ Recipe App &copy; {new Date().getFullYear()} | Developed by Prakash V
      </p>
      <p className="text-xs text-gray-400">Powered by TheMealDB API</p>
    </footer>
  );
};

export default Footer;
