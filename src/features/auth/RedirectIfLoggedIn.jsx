import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RedirectIfLoggedIn = () => {
    const user = useSelector((state) => state.auth.user); // Get the logged-in user state
    const location = useLocation(); // Get current location

    // List of paths where logged-in users should not access (like login and register)
    const restrictedRoutes = ['/login', '/register'];

    // console.log(location.state?.from?.pathname, "redirect if lgin");

    // If the user is logged in and tries to access login or register page, redirect them back
    if (user && restrictedRoutes.includes(location.pathname)) {
        // Redirect back to the previously attempted route or default to '/'
        return <Navigate to={location.state?.from?.pathname || '/profile'} replace />;
    }

    // If the user is not logged in, allow access to the child routes (like login or register)
    return <Outlet />;
};

export default RedirectIfLoggedIn;
