import React from 'react';
import { NavLink } from 'react-router';

const Navber = () => {
  return (
    <div className="navbar bg-base-100 mb-10 shadow-sm px-4 md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/listedbook'}>Listed Books</NavLink>
            </li>
            <li>
              <NavLink to={'/pagetoread'}>Pages to Read</NavLink>
            </li>
          </ul>
        </div>
        <img className='w-[50px]' src="./src/assets/book logo.JPG" alt="" />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/listedbook'}>Listed Books</NavLink>
          </li>
          <li>
            <NavLink to={'/pagetoread'}>Pages to Read</NavLink>
          </li>
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
