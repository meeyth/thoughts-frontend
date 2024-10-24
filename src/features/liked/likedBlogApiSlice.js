import { apiSlice } from '../../app/apiSlice';

export const likeApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getMyLikedBlogs: builder.query({
            query: () => `/blog/get-liked-blogs`,
            transformResponse: (response) => response.data.docs,
            providesTags: ['Posts'],
        })
    }),
});

export const { useGetMyLikedBlogsQuery } = likeApiSlice;
