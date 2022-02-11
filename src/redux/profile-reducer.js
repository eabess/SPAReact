let ADD_POST_TO_STATE = 'ADD-POST-TO-STATE';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {  
    switch (action.type) {
        case ADD_POST_TO_STATE:
            let newPost = {
                id: 3,
                post: state.newPostText,
                likeCount: 0,
                repostCount: 0,
            };
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST_TO_STATE });
export const updateNewPostTextActionCreator = (text) => 
  ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;