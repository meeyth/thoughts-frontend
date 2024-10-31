
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut } from '../features/auth/authSlice';


// Base query with automatic cookie handling
const baseQuery = fetchBaseQuery({
    baseUrl: 'https://thoughts-backend-jxm7.onrender.com/api/v1',
    // baseUrl: 'http://localhost:8000/api/v1',
    credentials: 'include',  // Automatically send cookies with requests

    // prepareHeaders: (headers, { getState }) => {
    //     console.log(getState().auth, "header");
    //     const token = getState().auth.token;
    //     if (token) {
    //         headers.set('Authorization', `Bearer ${token}`);
    //     }
    //     return headers;
    // },
});

// Enhanced base query with token refresh logic
const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 403) {
        // If access token expired, try refreshing the token
        console.log("Inside baseQueryWithReauth");
        const refreshResult = await baseQuery('/users/refresh-token', api, extraOptions);

        console.log(refreshResult, "refresh result");

        if (refreshResult?.data) {
            // Refresh successful, update the store with new credentials
            api.dispatch(setCredentials({ user: refreshResult.data.user }));
            // Retry the original query with new token
            result = await baseQuery(args, api, extraOptions);
        } else {
            // Refresh failed, log the user out
            api.dispatch(logOut());
        }
    }

    return result;
};

// Creating the API slice for the application
export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,  // Use the enhanced base query with reauthentication
    endpoints: (builder) => ({}),    // Extend this later with feature-specific endpoints
});
