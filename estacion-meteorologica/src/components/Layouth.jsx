import React from 'react';
import '../styles/App.css'
import NavBar from '../components/NavBar';

const LayoutWithNavBar = ({ children }) => {
    return (
        <div className="layout-container">
            <NavBar />
            <div className="content-container">
                {children}
            </div>
        </div>
    );
}

export default LayoutWithNavBar;
