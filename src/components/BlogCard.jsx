import React from 'react'
import { Link } from 'react-router-dom'
import ReactTimeago from 'react-timeago'

const BlogCard = ({ blog }) => {
    // console.log(blog);
    return (
        <div style={{ border: "1px solid white", marginBottom: 5, cursor: "pointer", height: "27rem" }}>
            <p>{blog._id}</p>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <img src={blog.image} alt={blog.title} style={{ height: "10rem", width: "15rem", objectFit: "contain" }} />
            <br />
            <small>Written by: {blog.owner.username}</small>
            <br />
            <Link to={`/blogs/${blog._id}`}>Read More</Link>
            <p>Uploaded: <ReactTimeago date={blog.createdAt} /></p>
        </div>
    )
}

export default BlogCard