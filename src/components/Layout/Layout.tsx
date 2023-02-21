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
tfcd snippet shortcut

When we work with typescript in react we create types
types specify what props need to be passed to this component
& this ensures that were passing everything this component needs
to prevent bugs & crashes

ctrl + . to auto import
*/