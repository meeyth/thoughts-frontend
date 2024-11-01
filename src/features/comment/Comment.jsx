import React from 'react'
import { useGetCommentOfBlogQuery } from './commentApiSlice'
import { useParams } from 'react-router-dom';

const Comment = () => {
    const { blogId } = useParams();
    const { data } = useGetCommentOfBlogQuery(blogId);

    console.log(data);

    return (
        <div>
            <h1>Comments</h1>
        </div>
    )
}

export default Comment