let ADD_POST_TO_STATE = 'ADD-POST-TO-STATE';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: 1, post: 'Hi, how are you? ;)', likeCount: 3, repostCount: 1},
        {id: 2, post: 'It\'s my first post :)', likeCount: 6, repostCount: 3},
      ],
    newPostText: 'enter text',
};

const profileReducer = (state = initialState, action) => {  
    switch (action.type) {
        case ADD_POST_TO_STATE:
            let newPost = {
                id: 3,
                post: state.newPostText,
                likeCount: 0,
                repostCount: 0,
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: '',
            };

        case UPDATE_NEW_POST_TEXT:
            return {
               ...state,
               newPostText: action.newText,
            };
            
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST_TO_STATE });
export const updateNewPostTextActionCreator = (text) => 
  ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;