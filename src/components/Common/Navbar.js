import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Fashion Inc.</Link>
        <div>
          <Link to="/headlines" className="px-4 hover:text-gray-300">Headlines</Link>
          <Link to="/analyze" className="px-4 hover:text-gray-300">Analyze</Link>
          <Link to="/auth" className="px-4 hover:text-gray-300">Login</Link>
          {/* Update the above link to "/logout" and logic for logout if the user is authenticated */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
