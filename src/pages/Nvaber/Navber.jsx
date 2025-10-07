import React from 'react';
import { NavLink } from 'react-router';

const Navber = () => {
  return (
    <div className="navbar bg-base-100 mb-10 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>

        </div>
        <img className='w-[50px]' src="./src/assets/book logo.JPG" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         <NavLink to={'/'}> <li><a>Home</a></li></NavLink>

          <NavLink to={'/listedbook'}><li><a>Listed Books</a></li></NavLink>

          <NavLink to={'/pagetoread'}><li><a>Pages to Read</a></li></NavLink>
        </ul>
      </div>
      <div className="navbar-end flex flex-row gap-2">
        <button className="btn btn-neutral">Sign Up</button>
        <button className="btn btn-neutral">Log In</button>
      </div>
    </div>
  );
};

export default Navber;