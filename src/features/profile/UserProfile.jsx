import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetUserByUsernameQuery, useToggleFollowByIdMutation } from './userProfileApiSlice';

const UserProfile = () => {
    const { username } = useParams();
    const { data, isLoading, error } = useGetUserByUsernameQuery(username);
    const profile = data?.profile;

    const [toggleFollow, { isLoading: isToggleLoading }] = useToggleFollowByIdMutation();

    const handleClick = async () => {
        const data = await toggleFollow(profile._id).unwrap();
        console.log(data, "data");
    }

    console.log(username);
    return (
        <div>
            <img src={profile?.avatar} alt="" />
            <h1>{profile?.username}</h1>
            <button onClick={handleClick} style={{ backgroundColor: data?.isFollowing ? "#888888" : "#4477ff" }}>{data?.isFollowing ? "Unfollow" : "Follow"}</button>
        </div>
    )
}

export default UserProfile