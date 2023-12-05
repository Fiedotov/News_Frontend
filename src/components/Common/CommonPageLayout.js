import React from 'react';
import Navbar from './Navbar'; // Assuming you have a Navbar component

const CommonPageLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-200 p-4 text-center text-sm">
        © {new Date().getFullYear()} Fashion Inc.
      </footer>
    </div>
  );
};

export default CommonPageLayout;
