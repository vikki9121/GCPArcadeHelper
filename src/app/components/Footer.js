import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-700 text-white text-center p-4">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} GCPArcadeHelper. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
