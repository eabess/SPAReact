import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    // debugger;
    let postsElements = props.postData
        .map(p => <Post 
            massege = { p.post } 
            likeCount = { p.likeCount } 
            repostCount = { p.repostCount } />
    );
    
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };
    
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };
    
    return (
        <div className = { s.postBlock }>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea 
                        onChange={ onPostChange } 
                        ref = { newPostElement } 
                        value = { props.newPostText } ></textarea>
                </div>
                <div>
                    <button onClick={ onAddPost } >Add post</button>
                </div>
            </div>
            <div className = { s.posts } >
                { postsElements }
            </div>
        </div>);
};

export default MyPosts;