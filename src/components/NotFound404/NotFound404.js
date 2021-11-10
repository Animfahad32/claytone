import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './NotFound404.css';

const NotFound404 = () => {
    return (
        <>
        <Navigation></Navigation>
        <div>
        <div className="bg-clr p-1">
             <div className="container mt-5">
                <h1 className="notfound">404 NOT FOUND</h1>
            </div>
        </div>
        <div className="container text-center notfoundtext">
            <h2>404 Page Not Found</h2>
            <p>The page you requested does not exist. <Link to="/allproducts">Click here</Link> to continue shopping.</p>
        </div>
        </div>
        </>
    );
};

export default NotFound404;