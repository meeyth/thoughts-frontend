import React, { useCallback, useEffect, useState } from 'react'
import { useGetFeedQuery } from './feedApiSlice'
import { Link } from 'react-router-dom';
import ReactTimeago from 'react-timeago';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentPageToNextPage } from './feedSlice';
import BlogCard from '../../components/BlogCard';

const Feed = () => {

    const dispatch = useDispatch()

    const feedDetails = useSelector(state => state.feed.feedDetails);
    const { data, isLoading, isFetching, error } = useGetFeedQuery({ page: feedDetails.page, limit: 3 });

    // console.log(data, "feed details in Feed.jsx");

    // const { docs } = data

    // Infinite scroll handler
    const handleScroll = useCallback(() => {
        if (
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.offsetHeight - 2
            && feedDetails?.hasNextPage
        ) {
            console.log("working", feedDetails.page);
            dispatch(updateCurrentPageToNextPage({
                ...feedDetails, page: feedDetails.page + 1
            }));
        }
    }, [dispatch, feedDetails]);

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    }, [handleScroll]);


    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Failed to load blogs.</p>;

    // console.log(feed?.data?.docs);
    return (
        <>
            <h1>Feed</h1>
            {data?.docs?.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
            ))}
            {isFetching && <p>Loading more blogs...</p>}
            {!data.hasNextPage && <p>You reached the end of the page</p>}
        </>
    )
}

export default Feed