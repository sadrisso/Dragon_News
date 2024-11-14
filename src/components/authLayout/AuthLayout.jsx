import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

const AuthLayout = () => {
    return (
        <div className='font-poppins bg-[#F3F3F3] min-h-screen'>
            <header className='container mx-auto'>
                <Navbar />
            </header>
            <Outlet />
        </div>
    );
};

export default AuthLayout;