import { apiSlice } from '../../app/apiSlice';

export const commentApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getCommentOfBlog: builder.query({
            query: (id) => `/blog/blog-comment/${id}`,
            transformResponse: (response) => response.data.docs,
            // providesTags: ['Posts'],
        })
    }),
});

export const { useGetCommentOfBlogQuery } = commentApiSlice;
