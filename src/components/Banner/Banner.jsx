import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
  return (
    <div className="mb-10 shadow-sm bg-slate-100 rounded-2xl flex flex-col lg:flex-row items-center justify-between p-6 lg:p-10">
      <div className="lg:w-1/2 w-full text-center lg:text-start space-y-5">
        <h2 className="text-4xl lg:text-5xl font-semibold leading-tight font-titillium">
          Books to freshen up <br className="hidden lg:block" /> your bookshelf
        </h2>
        <Link to={'/pagetoread'}>
          <button className="btn btn-outline mt-4">View The List</button>
        </Link>
      </div>

      <figure className="lg:w-1/2 w-full flex justify-center mt-6 lg:mt-0">
        <img
          className="p-5 rounded-2xl w-full max-w-sm object-contain"
          src="./src/assets/book1.JPG"
          alt="Book Banner"
        />
      </figure>
    </div>
  );
};

export default Banner;
