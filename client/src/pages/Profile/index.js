import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin;
    return (
        <div className='container text-center'>
            <h2>My Profile</h2>
            {userInfo && 
                <div>
                    <p>Name : {userInfo.name}</p>
                    <p>Email : {userInfo.email}</p>
                </div>
            }
        </div>
    );
}

export default Profile;