import React from 'react';
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router';

const Book = ({ book }) => {


    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <Link to={`/details/ ${bookId}`}>
            <div>
                <div className="card  w-96 h-[500px]  shadow-xl">
                    <figure className="px-16 rounded-2xl py-5 bg-slate-100">
                        <img
                            src={image}
                            alt="Shoes"
                            className="rounded-xl max-w-36 " />
                    </figure>
                    <div className=" font-titillium">
                        <div className='flex justify-start gap-5 mt-2 text-blue-900'>
                            {
                                tags.map(tag => <button>{tag}</button>)
                            }
                        </div>
                        <p className='text-start text-2xl font-semibold mt-3'>{bookName}</p>
                        <p className='text-start mt-2'>By : {author}</p>

                        <hr className='my-3 border-t border-gray-300' />

                        <div className="flex  justify-between">
                            <p>{category}</p>
                            <p className='flex gap-3 justify-center items-center'><FaStar />{rating}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;