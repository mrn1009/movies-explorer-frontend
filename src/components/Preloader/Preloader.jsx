import React from 'react';
import './Preloader.css';

function Preloader({ isOpen }) {
  return (
    <>
      {isOpen && (
        <div className="preloader">
          <div className="preloader__spinner"></div>
        </div>
      )}
    </>
  );
}

export default Preloader;