import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetBlogByIdQuery, useIsBlogLikedByIdQuery, useToggleLikeOfBlogByIdMutation } from './blogApiSlice';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import moment from 'moment';
import ReactTimeago from 'react-timeago';
import { FiHeart, FiMessageCircle, FiShare2} from "react-icons/fi";

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
        <>
            <div className="min-h-screen bg-white font-sans">
      
      {/* Main Content Section */}
      <main className="md:flex md:justify-between md:items-center p-6 md:px-16">
        {/* Left Image Section */}
        
          <div className="relative w-full md:w-1/2 flex items-center justify-center">
            <img
              src={blog.image}
              alt={blog.title}
              className="rounded-lg shadow-md w-full h-auto"
            />
            <div className="absolute bottom-4 -left-4 w-12 h-12  rounded-full flex items-center justify-center">
              <img src={blog.owner} className="object-cover h-full w-full rounded-full" />
            </div>
          </div>
            
        
        {/* Right Text Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-12 text-left">
          <div className="text-orange-500 text-sm font-bold">Trending</div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mt-2 font-heading">
            {blog.title}
          </h1>
                        
          <div className="flex flex-row w-full justify-evenly mt-5">
            {isLiked ? <span><IoIosHeart size={25} onClick={handleClick} fill='#ff3355' /> {blog.likeCount}</span>:
            <span><IoIosHeartEmpty size={25} onClick={handleClick} fill='#ff3355' /> {blog.likeCount}</span>}
                            
            <FiMessageCircle />
            <FiShare2 />
                            
            </div>
                        
    
            <div><ReactTimeago date={blog.createdAt} />
            <p>Comments: <Link to={`/comments/${blog._id}`}>{blog.commentCount}</Link></p></div>
        </div>
        
        </main>
                
      <div className="md:flex md:justify-between md:items-center p-6 md:px-16 font-body text-justify">
        <p className="mt-6 text-lg text-gray-700">
            {blog.content}
          </p>
      </div>
      <div className="md:flex md:justify-between md:items-center p-6 md:px-16">
          <div className="h-0.5 bg-gray-200 w-full rounded-full"></div>
      </div>
      
      
    </div>

        {/* <div>
            
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

        </div> */}
        </>
    );
};

export default BlogDetailPage;
