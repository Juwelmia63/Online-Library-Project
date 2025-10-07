import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className=" mb-10 shadow-sm flex justify-evenly bg-slate-100 rounded-2xl">
                
                <div className="mt-6">
                    <h2 className="text-5xl font-semibold leading-16 text-start font-titillium">NBooks to freshen up <br /> your bookshelf</h2>
                    
                   <button className="btn btn-outline flex mt-10">View The List</button>
                </div>


                <figure>
                    <img className='p-5 rounded-4xl mr-6'
                        src="./src/assets/book1.JPG"
                        alt="Movie" />
                </figure>
            </div>
        </div>
    );
};

export default Banner;