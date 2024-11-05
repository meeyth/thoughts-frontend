
import { apiSlice } from '../../app/apiSlice';
import { current } from '@reduxjs/toolkit';
import { setLikeDetails } from './likedBlogSlice';

export const likeApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getMyLikedBlogs: builder.query({
            query: ({ page = 1, limit = 3 }) => ({
                url: `/blog/get-liked-blogs?page=${page}&limit=${limit}`,
                method: 'GET',
            }),

            async onQueryStarted (arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setLikeDetails({
                        totalDocs: data.totalDocs,
                        limit: data.limit,
                        page: data.page,
                        totalPages: data.totalPages,
                        hasNextPage: data.hasNextPage,
                        hasPrevPage: data.hasPrevPage,
                        prevPage: data.prevPage,
                        nextPage: data.nextPage,
                        pagingCounter: data.pagingCounter
                    }))
                } catch (error) {
                    console.error("Liked blogs fetched failed: ", error);
                }
            },

            serializeQueryArgs: ({ endpointName }) => {
                return endpointName;
            },

            transformResponse: (response) => {
                return response.data
            },

            merge: (existingCache, newItems) => {
                return {
                    ...existingCache,
                    docs: [...existingCache.docs, ...newItems.docs],
                    totalDocs: newItems.totalDocs,
                    limit: newItems.limit,
                    page: newItems.page,
                    totalPages: newItems.totalPages,
                    hasNextPage: newItems.hasNextPage,
                    hasPrevPage: newItems.hasPrevPage,
                    prevPage: newItems.prevPage,
                    nextPage: newItems.nextPage,
                    pagingCounter: newItems.pagingCounter
                };
            },

<<<<<<< HEAD
            forceRefetch({ currentArg, previousArg, }) {
=======
            forceRefetch ({ currentArg, previousArg, }) {
>>>>>>> 9f0313cd71cc63a73f7ad9032c0011d6c57f6fe6
                return currentArg?.page != previousArg?.page;
            },


        })
    }),
});

export const { useGetMyLikedBlogsQuery } = likeApiSlice;
