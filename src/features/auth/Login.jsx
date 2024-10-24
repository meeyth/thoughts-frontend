import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from './authApiSlice';
import { setCredentials } from './authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [login, { isLoading }] = useLoginMutation();  // RTK Query mutation hook
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Trigger the login mutation and unwrap the result to handle success or error
            await login({ username, email, password }).unwrap();

            // Dispatch the action to store user credentials in Redux

            // console.log(userData.data.user, "LOGInnnnnnnn");
            // dispatch(setCredentials({ user: userData.data.user }));

            // Navigate to the profile or home page after successful login
            navigate('/profile');
        } catch (err) {
            // Handle the error: show a message or update error state
            setErrorMessage('Login failed: ' + (err?.data?.message || 'Unknown error'));
        }
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default Login;
