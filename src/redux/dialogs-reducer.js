let SEND_MESSAGE = 'SEND_MESSAGE';
let UPDATE_NEW_POST_MESSAGE_BODY = 'UPDATE_NEW_POST_MESSAGE_BODY';

let initialState = {
    dialogs: [
        {id: 1, name: 'Alexander', 
          src: 'https://deadbees.net/wp-content/uploads/2016/07/200716_42.jpg', 
          alt: 'https://audit.msu.ru/wp-content/themes/audit/images/noavatar.png' },
        {id: 2, name: 'Maha', 
          src: 'https://deadbees.net/wp-content/uploads/2016/07/200716_41.jpg', 
          alt: 'https://audit.msu.ru/wp-content/themes/audit/images/noavatar.png' },
        {id: 3, name: 'Liza', 
          src: 'https://birdinflight.com/wp-content/uploads/2014/08/monkey-selfie-cover-e1462271269546.jpg', 
          alt: 'https://audit.msu.ru/wp-content/themes/audit/images/noavatar.png' },
        {id: 4, name: 'Piter', 
          src: 'https://deadbees.net/wp-content/uploads/2016/07/200716_44.jpg', 
          alt: 'https://audit.msu.ru/wp-content/themes/audit/images/noavatar.png' }
      ],
    messages: [
        {id: 1, message: 'Hi :)'},
        {id: 2, message: 'Hello!!'},
        {id: 3, message: 'Hi, how are you??'},
        {id: 4, message: 'Hey, not much? how about you?'}
      ],
    newMessageBody: '',
    userAkk: {id: 1,
      name: 'Alexander',
      src: 'https://deadbees.net/wp-content/uploads/2016/07/200716_42.jpg', 
      alt: 'https://audit.msu.ru/wp-content/themes/audit/images/noavatar.png' 
    },
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, {id: 5, message: body}]
      };

    case UPDATE_NEW_POST_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      };

    default:
      return state;
  }
};

export const sendMessageCreator = () => ({  type: SEND_MESSAGE });
export const updateNewMessageBodyCreator  = (body) => 
({ type: UPDATE_NEW_POST_MESSAGE_BODY, body: body });

export default dialogsReducer;