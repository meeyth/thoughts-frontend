import React from 'react'
import { useGetMyLikedBlogsQuery } from './likedBlogApiSlice'
import { Link } from 'react-router-dom';

const LikedBlog = () => {
    const { data, } = useGetMyLikedBlogsQuery()
    console.log(data);
    return (
        <>
            <h1>LikedBlog</h1>
            {data?.map(({ likedBlogs }) => (
                <div key={likedBlogs._id} style={{ border: "1px solid white", marginBottom: 5, cursor: "pointer", height: "25rem" }}>
                    <p>{likedBlogs._id}</p>
                    <h2>{likedBlogs.title}</h2>
                    <p>{likedBlogs.content}</p>
                    <img src={likedBlogs.image} alt={likedBlogs.title} style={{ height: "10rem", width: "15rem", objectFit: "contain" }} />
                    <br />
                    <small>Written by: {likedBlogs.owner}</small>
                    <br />
                    <Link to={`/blogs/${likedBlogs._id}`}>Read More</Link>
                </div>
            ))}
        </>
    )
}

export default LikedBlog