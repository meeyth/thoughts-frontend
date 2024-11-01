import { apiSlice } from '../../app/apiSlice';

export const followApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getfollowersById: builder.query({
            query: (userId) => `/users/get-follower/${userId}`,
            transformResponse: (response) => response.data.docs,
            // providesTags: ['Posts'],
        }),
        getfollowingsById: builder.query({
            query: (userId) => `/users/get-following/${userId}`,
            transformResponse: (response) => response.data.docs,
            // providesTags: ['Posts'],
        })
    }),
});

export const { useGetfollowersByIdQuery, useGetfollowingsByIdQuery } = followApiSlice;
