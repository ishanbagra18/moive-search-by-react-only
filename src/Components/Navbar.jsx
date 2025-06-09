import React from 'react';

function Navbar() {
  return (
    <div className='main flex justify-between items-center p-4 sticky top-0' style={{ backgroundColor: '#bd9391' }}>
      <div className='left flex items-center space-x-3'>
        <img className='w-20' src='./popcorn.png' alt='' />
        <h2 className='font-bold' style={{ color: '#342e37' }}>MovieSearcher</h2>
      </div>

      <div className='right'>
        <ul className='flex space-x-10 cursor-pointer text-white'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
