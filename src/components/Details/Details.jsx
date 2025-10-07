import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const Details = () => {


    const { id } = useParams();

    const parseId = parseInt(id);

    const books = useLoaderData();

    const singleData = books.find(book => book.bookId === parseId);



    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = singleData;




    // console.log( typeof id)
    return (
        <div>
            <h1>{bookName}</h1>
        </div>
    );
};

export default Details;