import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequireAuth = () => {
    const user = useSelector((state) => state.auth.user);

    // If the user is not logged in, redirect to the login page

    const location = useLocation(); // Get current location
    // console.log(location.pathname, "req auth");

    // If the user is not logged in, redirect to login and save the current path
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // If the user is logged in, allow access to the child route (protected route)
    return <Outlet />;


};

export default RequireAuth;
