import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetBlogByIdQuery, useIsBlogLikedByIdQuery, useToggleLikeOfBlogByIdMutation } from './blogApiSlice';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import moment from 'moment';
import ReactTimeago from 'react-timeago';

const BlogDetailPage = () => {
    const { id } = useParams(); // Get the blog id from the URL

    const { data: blog, isLoading, error } = useGetBlogByIdQuery(id); // Fetch blog by id
    const { data: isLiked } = useIsBlogLikedByIdQuery(id); // Fetch blog by id

    console.log(isLiked);


    const [toggleLikeOfBlogById, { isLoading: isToggleLoading }] = useToggleLikeOfBlogByIdMutation();

    const handleClick = async () => {
        const data = await toggleLikeOfBlogById(id).unwrap();
        console.log(data, "data");
    }

    console.log(blog, "A blog");

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching the blog.</p>;

    return (
        <div>
            <h1>{blog.title}</h1>
            <img src={blog.image} alt={blog.title} style={{ height: "20rem", width: "35rem", objectFit: "contain" }} />
            <p>{blog.content}</p>
            <p>Written by: {blog.owner}</p>
            <br />
            {isLiked ? <p><IoIosHeart size={25} onClick={handleClick} fill='#ff3355' /> {blog.likeCount}</p> :
                <p><IoIosHeartEmpty size={25} onClick={handleClick} fill='#ff3355' /> {blog.likeCount}</p>}
            <p>Uploaded: {moment(blog.createdAt).format('dddd, h:mm A')}</p>
            <ReactTimeago date={blog.createdAt} />
            <p>Comments: <Link to={`/comments/${blog._id}`}>{blog.commentCount}</Link></p>

        </div>
    );
};

export default BlogDetailPage;
