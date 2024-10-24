import { apiSlice } from '../../app/apiSlice';

export const blogApiSlice = apiSlice.injectEndpoints({
    // invalidatesTags: ['Posts'],
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: () => '/blogs',
        }),
        getBlogById: builder.query({
            query: (id) => `/blog/get-blog/${id}`, // API endpoint to get blog by id
            transformResponse: (response) => response.data,
            providesTags: ['Posts'],
        }),
        toggleLikeOfBlogById: builder.mutation({
            query: (id) => ({
                url: `/blog/toggle-blog-like/${id}`,
                method: 'PUT',
                // credentials: "include",
                body: { id }
            }),
            transformResponse: response => response.data,
            invalidatesTags: ['Posts'],
        }),

        isBlogLikedById: builder.query({
            query: (id) => `/blog/is-blog-like/${id}`,
            transformResponse: response => response.data,
            // credentials: "include",
            providesTags: ['Posts'],
        })
    }),
});

export const { useGetBlogsQuery, useGetBlogByIdQuery, useToggleLikeOfBlogByIdMutation, useIsBlogLikedByIdQuery } = blogApiSlice;
