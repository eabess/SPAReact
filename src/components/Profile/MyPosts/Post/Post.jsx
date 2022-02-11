import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className = {s.item}>
            <img src = 'https://deadbees.net/wp-content/uploads/2016/07/200716_41.jpg'
                alt = 'https://birdinflight.com/wp-content/uploads/2014/08/monkey-selfie-cover-e1462271269546.jpg'></img>
            {props.massege}
            <div>
                <span>like </span> {props.likeCount}
                <span> repost </span> {props.repostCount}
            </div>
        </div>);
};

export default Post;