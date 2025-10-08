import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredData, getWishlistdata } from '../../Utilitys';
import { Select } from '@radix-ui/react-select';

const Listedbooks = () => {
  const [readList, setReadList] = useState([]);

  const [wishlist, setWishlist] = useState([])

  const allBooks = useLoaderData();

  // for readlist data 

  useEffect(() => {
    const getReadListData = getStoredData();
    const myreadlist = allBooks.filter(book => getReadListData.includes(book.bookId));
    setReadList(myreadlist)
  }, [])

  // for wishlist data 

  useEffect(() => {
    const getwishlistdata = getWishlistdata();
    const mywishlistData = allBooks.filter(book => getwishlistdata.includes(book.bookId));

    setWishlist(mywishlistData);

  }, [])



  return (
    <div className="px-4 md:px-8">
      <div className="bg-slate-100 rounded-2xl mb-5">
        <h1 className="text-4xl font-semibold text-center py-4 font-titillium">
          Books
        </h1>
      </div>

      <div className="flex justify-end mb-5">
        <select defaultValue="Sort By" className="select select-bordered select-sm w-40">
          <option disabled>Sort By</option>
          <option>Rating</option>
          <option>Year</option>
          <option>Pages</option>
        </select>
      </div>



      <div className="mt-10 mb-10">
        <Tabs>
          <TabList>
            <Tab>Read List ({readList.length})</Tab>
            <Tab>Wish List</Tab>
          </TabList>

          <TabPanel>



            {
              readList.length === 0 ? (
                <p>Read List Is Empty Please add---</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                  {readList.map((book) => (
                    <div
                      key={book.bookId}
                      className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center"
                    >
                      <img
                        src={book.image}
                        alt={book.bookName}
                        className="w-32 h-44 object-contain mb-3"
                      />
                      <h3 className="text-lg font-semibold">{book.bookName}</h3>
                      <p className="text-sm text-gray-600">By {book.author}</p>
                      <p className="text-sm text-gray-500 mt-1">⭐ {book.rating}</p>
                    </div>
                  ))}
                </div>
              )
            }



          </TabPanel>

          <TabPanel>
            {
              wishlist.length === 0 ? (
                <p>WishList Empty Please Add</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                  {wishlist.map((book) => (
                    <div
                      key={book.bookId}
                      className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center"
                    >
                      <img
                        src={book.image}
                        alt={book.bookName}
                        className="w-32 h-44 object-contain mb-3"
                      />
                      <h3 className="text-lg font-semibold">{book.bookName}</h3>
                      <p className="text-sm text-gray-600">By {book.author}</p>
                      <p className="text-sm text-gray-500 mt-1">⭐ {book.rating}</p>
                    </div>
                  ))}
                </div>
              )
            }
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Listedbooks;
