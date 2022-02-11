import React from "react";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    // debugger;
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData = {props.profilePage.postData} 
                newPostText = {props.profilePage.newPostText}
                dispatch = {props.dispatch}
                />
        </div>);
};

export default Profile;