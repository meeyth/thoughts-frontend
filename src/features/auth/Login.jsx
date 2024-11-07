import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from './authApiSlice';
import { setCredentials } from './authSlice';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [login, { isLoading }] = useLoginMutation();  // RTK Query mutation hook
  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState(0);

  // Array of background images
  const bgImages = [
    "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % bgImages.length);
    }, 3000);
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [bgImages.length]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Trigger the login mutation and unwrap the result to handle success or error
      await login({ username, email, password }).unwrap();

      // Dispatch the action to store user credentials in Redux

      // console.log(userData.data.user, "LOGInnnnnnnn");
      // dispatch(setCredentials({ user: userData.data.user }));

      // Navigate to the profile or home page after successful login
      navigate('/feed');
    } catch (err) {
      // Handle the error: show a message or update error state
      setErrorMessage('Login failed: ' + (err?.data?.message || 'Unknown error'));
    }
  };

  return (

    <div className="relative min-h-screen flex items-center justify-center w-full">
      {/* Background Image with animation */}
      <AnimatePresence wait>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${bgImages[currentImage]}')` }}
        />
      </AnimatePresence>

      {/* Login Card */}
      <div className="relative z-10 max-w-md w-full bg-white bg-opacity-80 rounded-2xl shadow-xl p-10 neumorphism h-full">
        <div className=" flex justify-center text-3xl font-heading font-semibold text-gray-900">Thoughts<span className='text-orange-500 text-3xl font-bold'>!</span></div>

        {/* Welcome Text */}
        {/* <h2 className="text-2xl font-bold text-gray-800 text-center">Welcome back</h2> */}
        <p className="mt-2 text-sm text-center text-gray-500">Sign in to continue your journey.</p>

        {/* Login Form */}
        <form className="mt-8" onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Username</label>
            <input
              type="text"
              id="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)} required
              className="w-full mt-1 p-2 border border-orange-300 rounded-lg focus:border-orange-300 focus:ring focus:ring-orange-200 outline-none"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-2 border border-orange-300 rounded-lg focus:border-orange-300 focus:ring focus:ring-orange-200 outline-none" required
            />
          </div>


          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-2 border border-orange-300 rounded-lg focus:border-orange-300 focus:ring focus:ring-orange-200 outline-none" required
            />
          </div>


          {errorMessage && <p className="error-message">{errorMessage}</p>}

          {/* Login Button */}
          <button
            type="submit" disabled={isLoading}
            className="w-full bg-orange-400 text-white py-2 px-4 rounded-lg shadow-md hover:bg-white hover:text-orange-500 transition-all">
            {isLoading ? 'Logging in...' : 'Login'}
          </button>


          {/* Create Account and Other Login Options */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              Don’t have an account? <a href="#" className="text-orange-600 hover:underline">Create Account</a>
            </p>
          </div>

        </form>
      </div>
    </div>


  );
};

export default Login;
