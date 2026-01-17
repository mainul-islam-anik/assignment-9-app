import React from 'react';
import Navber from '../../Component/Hedder/Navber';
import Footer from '../../Component/Footer/Footer';
import { Outlet, useNavigation } from 'react-router';
import './Root.css'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import Loading from '../Loading';
const Root = () => {
    const {state}= useNavigation()
    return (
        <div>
            {import.meta.env.VITE_name}
            <ToastContainer />
            <Navber></Navber>
             {state==="loading"?<Loading></Loading>:<Outlet></Outlet>}
            <Footer></Footer>
        </div>
    );
};

export default Root;