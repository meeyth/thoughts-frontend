import React from 'react'
import { Link } from 'react-router-dom'
import ReactTimeago from 'react-timeago'

const BlogCard = ({ blog }) => {
    // console.log(blog);
    return (
        // <div style={{ border: "1px solid white", marginBottom: 5, cursor: "pointer", height: "27rem" }}>
        //     <p>{blog._id}</p>
        //     <h2>{blog.title}</h2>
        //     <p>{blog.content}</p>
        //     <img src={blog.image} alt={blog.title} style={{ height: "10rem", width: "15rem", objectFit: "contain" }} />
        //     <br />
        //     <small>Written by: <Link to={`/users/${blog.owner.username}`}>{blog.owner.username}</Link></small>
        //     <br />
        //     <Link to={`/blogs/${blog._id}`}>Read More</Link>
        //     <p>Uploaded: <ReactTimeago date={blog.createdAt} /></p>
        // </div>
        <div
            className="bg-gray-50 p-6 rounded-xl shadow-neumorphism hover:shadow-neumorphism-hover transition duration-300 ease-in-out"
        >
            {/* Title and read time above the image */}
            <div className="p-2 py-1 flex flex-col justify-start ">
                <span className="text-gray-700 text-xs font-body bg-gray-200 p-1.5  rounded-full w-20 text-center">5 min read</span>
                <h2 className="font-bold text-xl mt-1 font-heading text-left">{blog.title}</h2>
            </div>
            <img className="w-full h-48 object-cover rounded-lg" src={blog.image} alt={blog.title} />
            <div className="p-4">
                <p className="text-gray-700 mt-2 font-body text-left">{blog.content}</p>
                <button className='mt-4 bg-gray-800 py-2 px-4 rounded-full shadow-neumorphism-button hover:shadow-neumorphism-button-hover transition duration-300 ease-in-out' >
                    <Link className="text-gray-50" to={`/blogs/${blog._id}`}>{"Read More >"}</Link>
                </button>
            </div>
        </div>
    )
}

export default BlogCard