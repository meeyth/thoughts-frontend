import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetUserByUsernameQuery } from './userProfileApiSlice';

const UserProfile = () => {
    const { username } = useParams();
    const { data, isLoading, error } = useGetUserByUsernameQuery(username);
    const profile = data?.profile

    console.log(username);
    return (
        <div>
            <img src={profile?.avatar} alt="" />
            <h1>{profile?.username}</h1>
            <button style={{ backgroundColor: data?.isFollowing ? "#888888" : "#4477ff" }}>{data?.isFollowing ? "Unfollow" : "Follow"}</button>
        </div>
    )
}

export default UserProfile