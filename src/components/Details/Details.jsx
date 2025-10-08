import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addStoreData, storeWislistdata } from "../../Utilitys";

const Details = () => {
  const { id } = useParams();
  const parseId = parseInt(id);
  const books = useLoaderData();
  const singleData = books.find((book) => book.bookId === parseId);

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
    bookId,
  } = singleData;

  const handleRead = (id) => {
    addStoreData(id);
  };
  const handlegetWishlistdata = (id) => {
    storeWislistdata(id);
  };

  return (
    <div className="max-w-5xl mx-auto p-10">
      <div className="bg-white shadow-md rounded-xl flex flex-col lg:flex-row overflow-hidden border border-gray-200">
        <div className="lg:w-1/2 bg-gray-50 flex items-center justify-center p-6">
          <img
            src={image}
            alt={bookName}
            className="object-contain w-full max-h-[450px] rounded-md"
          />
        </div>

        <div className="lg:w-1/2 p-8 flex flex-col justify-between text-start">
          <div>
            <h2 className="text-3xl font-bold mb-2">{bookName}</h2>
            <p className="text-gray-600 mb-4">
              By : <span className="font-medium">{author}</span>
            </p>
            <hr className="my-3 border-gray-300" />

            <p className="text-sm text-gray-700 mb-4">{category}</p>
            <hr className="my-3 border-gray-300" />

            <p className="text-gray-600 mb-4 leading-relaxed">{review}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <hr className="my-3 border-gray-300" />

            <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700 mb-6">
              <p>
                <strong>Number of Pages:</strong> {totalPages}
              </p>
              <p>
                <strong>Publisher:</strong> {publisher}
              </p>
              <p>
                <strong>Year of Publishing:</strong> {yearOfPublishing}
              </p>
              <p>
                <strong>Rating:</strong> {rating}
              </p>
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            <button
              onClick={() => handleRead(bookId)}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Read
            </button>
            <button
              onClick={() => handlegetWishlistdata(bookId)}
              className="bg-gray-200 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
