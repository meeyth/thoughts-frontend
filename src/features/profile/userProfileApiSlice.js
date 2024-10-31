import { apiSlice } from '../../app/apiSlice';

export const userProfileApiSlice = apiSlice.injectEndpoints({
    // invalidatesTags: ['Posts'],
    endpoints: (builder) => ({
        getUserByUsername: builder.query({
            query: (username) => `/users/profile/${username}`,
            transformResponse: response => response.data,
            providesTags: ["User"]
        }),

        toggleFollowById: builder.mutation({
            query: (id) => ({
                url: `/users/toggle-follow/${id}`,
                method: 'PUT',
                // credentials: "include",
                // body: { id }
            }),
            transformResponse: response => response.data,
            invalidatesTags: ['User'],
        }),
    }),
});

export const { useGetUserByUsernameQuery, useToggleFollowByIdMutation } = userProfileApiSlice;
