import React, { useCallback, useEffect } from 'react'
import { useGetMyLikedBlogsQuery } from './likedBlogApiSlice'
import { Link } from 'react-router-dom';
import BlogCard from '../../components/BlogCard';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentPageToNextPage } from './likedBlogSlice';

const LikedBlog = () => {
    const dispatch = useDispatch()

    const likedDetails = useSelector(state => state.like.likedDetails)

    console.log("likeddetails ", likedDetails);
    const { data, isLoading, isFetching, error } = useGetMyLikedBlogsQuery({ page: likedDetails.page, limit: 3 })

    console.log("likedDetails.hasNextpage ", likedDetails?.hasNextPage)

    console.log("data ", data);

    const handleScroll = useCallback(() => {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 2 && likedDetails?.hasNextPage) {
            console.log("working", likedDetails.page)

            dispatch(updateCurrentPageToNextPage({
                ...likedDetails,
                page: likedDetails.page + 1
            }))
        }
    }, [dispatch, likedDetails]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [handleScroll]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Failed to load liked blogs</p>;

    return (
        <>
            <h1>LikedBlog</h1>
            {data?.docs?.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
            ))}
            {isFetching && <p>Loading more blogs...</p>}
            {!data.hasNextPage && <p>You reached the end of the page</p>}
        </>
    )
}

export default LikedBlog