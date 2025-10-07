import React from 'react';

const Book = ({ book }) => {


    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <div>
            <div className="card  w-96 shadow-2xl">
                <figure className="px-16 rounded-2xl py-5 bg-slate-100">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl max-w-36 " />
                </figure>
                <div className=" font-titillium">
                    <div className='flex justify-center-safe gap-5 mt-2 text-blue-900'>
                        {
                            tags.map(tag => <button>{tag}</button>)
                        }
                    </div>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;