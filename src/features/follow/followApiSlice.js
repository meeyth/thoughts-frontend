import { apiSlice } from '../../app/apiSlice';

export const followApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getfollowersById: builder.query({
            query: (id) => `/blog/blog-comment/${id}`,
            transformResponse: (response) => response.data.docs,
            // providesTags: ['Posts'],
        }),
        getfollowingsById: builder.query({
            query: (id) => `/blog/blog-comment/${id}`,
            transformResponse: (response) => response.data.docs,
            // providesTags: ['Posts'],
        })
    }),
});

export const { getfollowersById, getfollowingsById } = followApiSlice;
