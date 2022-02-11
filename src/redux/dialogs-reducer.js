let SEND_MESSAGE = 'SEND_MESSAGE';
let UPDATE_NEW_POST_MESSAGE_BODY = 'UPDATE_NEW_POST_MESSAGE_BODY';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 5, message: body});
            return state;
        case UPDATE_NEW_POST_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({  type: SEND_MESSAGE });
export const updateNewMessageBodyCreator  = (body) => 
({ type: UPDATE_NEW_POST_MESSAGE_BODY, body: body });

export default dialogsReducer;