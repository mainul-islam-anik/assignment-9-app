import React from 'react';
import Navber from '../../Component/Hedder/Navber';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header>
                <Navber></Navber>
            </header>
            <main className='max-w-[1200px] mx-auto py-5'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;