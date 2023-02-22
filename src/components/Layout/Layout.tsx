import React from 'react';
import Navbar from '../Navbar/Navbar';

const Layout:React.FC = ({ children }) => {
    
    return (
        <>
        <Navbar />
        <main>{children}</main>
        </>
    )
}
export default Layout;

/*
Nextjs layout will enable us to create a layout
*/