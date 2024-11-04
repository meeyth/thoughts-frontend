import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';
import authReducer from '../features/auth/authSlice';
import feedDetailsReducer from '../features/feeds/feedSlice';
import likedDetailReducer from '../features/liked/likedBlogSlice'



const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,


        feed: feedDetailsReducer,
        like: likedDetailReducer

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
