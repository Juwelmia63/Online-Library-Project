import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from './Root/Root';
import Home from '../components/Home/Home';
import Listedbooks from '../components/ListedBook/Listedbooks';
import Pagetoread from '../components/Pagetoread/Pagetoread';




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listedbook',
        element: <Listedbooks></Listedbooks>
      },
      {
        path: '/pagetoread',
        element: <Pagetoread></Pagetoread>
      }
    ]
  },
]);