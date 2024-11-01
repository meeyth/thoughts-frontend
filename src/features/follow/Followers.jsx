import React from 'react'
import { useGetfollowersByIdQuery } from './followApiSlice';
import { useParams } from 'react-router-dom';

const Followers = () => {
    const { userId } = useParams();
    const { data } = useGetfollowersByIdQuery(userId);

    console.log(data);
    return (
        <h1>Your Followers</h1>
    )
}

export default Followers