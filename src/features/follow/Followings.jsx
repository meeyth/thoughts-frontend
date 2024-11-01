import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetfollowingsByIdQuery } from './followApiSlice';

const Followings = () => {
    const { userId } = useParams();
    const { data } = useGetfollowingsByIdQuery(userId);

    console.log(data);

    return (
        <h1>Your Followings</h1>
    )
}

export default Followings