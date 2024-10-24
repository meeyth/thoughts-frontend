import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetCurrentUserQuery, useLogoutMutation, useRefreshTokenMutation } from './authApiSlice';
import { useNavigate, Link, } from 'react-router-dom';


const Profile = () => {
    // Access the user state from Redux

    // const dispatch = useDispatch();
    const [logout] = useLogoutMutation();
    const navigate = useNavigate();
    // const { data: user, error, isLoading } = useGetCurrentUserQuery();

    const stateUser = useSelector(state => state.auth.user)


    const handleLogout = async () => {
        try {
            await logout().unwrap();  // Call the logout mutation
            navigate('/login');  // Redirect to login page after logout
        } catch (err) {
            console.error('Failed to log out:', err);
        }
    };


    console.log(stateUser, "redux user");

    // console.log(user?.data, "profile");


    // if (isLoading) return <p>Loading...</p>;
    // if (error) return <p>Error loading user data.</p>;


    // console.log(user);

    return (
        <div className="profile-page">
            <h2>Profile Page</h2>
            <Link to={"/feed"}>Feed</Link>
            <br />
            <Link to={"/liked"}>Liked</Link>
            <button onClick={handleLogout}>logout</button>
            {stateUser ? (
                <div>
                    <img src={stateUser?.avatar} alt={stateUser?.username} style={{ height: "5rem", borderRadius: "50%", aspectRatio: 1 }} />
                    <p>Welcome, <strong>{stateUser?.username}</strong>!</p>
                </div>
            ) : (
                <p>No user data available. Please log in.</p>
            )}
        </div>
    );
};

export default Profile;
