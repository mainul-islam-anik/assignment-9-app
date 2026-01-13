import React from 'react';
import Navber from '../../Component/Hedder/Navber';
import Footer from '../../Component/Footer/Footer';
import { Outlet } from 'react-router';
import './Root.css'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
const Root = () => {
    return (
        <div>
            <ToastContainer />
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;