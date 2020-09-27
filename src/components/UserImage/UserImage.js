import React, { useEffect, useState } from 'react';
import PostComment from '../PostComment/PostComment';

const UserImage = () => {
    const [userDetails, setUseruserDetails] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api/').then(res => res.json()).then(data => setUseruserDetails(data.results))
    }, [])

    return (
        <div>
            {
                userDetails.map(user => <PostComment
                    firstName ={user.name.first}
                    lastName = {user.name.last}
                    email = {user.email}
                    phone = {user.phone}
                    image = {user.picture.large}
                >
                </PostComment>)
            }
        </div>
    );
};

export default UserImage;