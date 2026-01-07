import React from 'react';
import Navber from '../../Component/Hedder/Navber';
import Footer from '../../Component/Footer/Footer';
import { Outlet } from 'react-router';
import './Root.css'
const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;