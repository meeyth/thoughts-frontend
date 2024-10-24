import { apiSlice } from '../../app/apiSlice';
import { logOut, setCredentials } from './authSlice';

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // Login endpoint definition
        login: builder.mutation({
            query: (credentials) => ({
                url: '/users/login',
                method: 'POST',
                body: credentials,
                // credentials: 'include',  // Ensure the cookies (tokens) are sent automatically
            }),
            async onQueryStarted (arg, { dispatch, queryFulfilled }) {
                try {
                    // Wait for the login response to resolve
                    const { data } = await queryFulfilled;
                    // console.log("dataaa", data.data.user.username);

                    // Dispatch the setCredentials action to store the user details in Redux
                    dispatch(setCredentials({ user: data.data.user }));
                } catch (error) {
                    console.error('Login failed:', error);
                }
            },
        }),

        logout: builder.mutation({
            query: () => ({
                url: '/users/logout',
                method: 'POST',
                // credentials: 'include', // Ensure cookies are sent
            }),
            async onQueryStarted (arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    dispatch(logOut()); // Clear Redux state on successful logout
                } catch (error) {
                    console.error('Logout failed: ', error);
                }
            },
        }),

        getCurrentUser: builder.query({
            query: () => ({
                url: '/users/current-user',  // Assuming the endpoint is /auth/me
                method: 'GET',
                // credentials: 'include',  // Include cookies automatically
            }),
            async onQueryStarted (arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    // console.log(data, "auth api slice");
                    dispatch(setCredentials({ user: data.data, token: data.accessToken }));  // Update Redux with user data
                } catch (err) {
                    console.error('Fetching current user failed:', err);
                }
            },
        }),

    }),
});

export const { useLoginMutation, useRefreshTokenMutation, useGetCurrentUserQuery, useLogoutMutation } = authApiSlice;
