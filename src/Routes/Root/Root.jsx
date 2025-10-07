import React from 'react';
import Navber from '../../pages/Nvaber/Navber';
import { Outlet } from 'react-router';
import Footer from '../../pages/Footer/Footer';

const Root = () => {
    return (
        <div className='container  mx-auto'>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;