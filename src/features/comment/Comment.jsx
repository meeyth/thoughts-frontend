import React from 'react'
import { useGetCommentOfBlogQuery } from './commentApiSlice'
import { useParams } from 'react-router-dom';

const Comment = () => {
    const { id } = useParams();
    const { data } = useGetCommentOfBlogQuery(id);

    console.log(data);

    return (
        <div>
            <h1>Comments</h1>
        </div>
    )
}

export default Comment