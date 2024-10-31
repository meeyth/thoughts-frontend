import { apiSlice } from '../../app/apiSlice';

export const userProfileApiSlice = apiSlice.injectEndpoints({
    // invalidatesTags: ['Posts'],
    endpoints: (builder) => ({
        getUserByUsername: builder.query({
            query: (username) => `/users/profile/${username}`,
            transformResponse: response => response.data,
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
    }),
});

export const { useGetUserByUsernameQuery } = userProfileApiSlice;
