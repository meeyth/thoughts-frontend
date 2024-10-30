import React from 'react'
import { useGetMyLikedBlogsQuery } from './likedBlogApiSlice'
import { Link } from 'react-router-dom';
import BlogCard from '../../components/BlogCard';

const LikedBlog = () => {
    const { data, } = useGetMyLikedBlogsQuery()
    console.log(data);
    return (
        <>
            <h1>LikedBlog</h1>
            {data?.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
            ))}
        </>
    )
}

export default LikedBlog