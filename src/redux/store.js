import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
  _state: {
    profilePage: {
      postData: [
          {id: 1, post: 'Hi, how are you? ;)', likeCount: 3, repostCount: 1},
          {id: 2, post: 'It\'s my first post :)', likeCount: 6, repostCount: 3},
        ],
      newPostText: 'enter text',
    },
    dialogsPage: {
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
    },
    sideBar: {
          avaFriends: [
        {id: 1, name: 'Alexander', 
          src: 'https://deadbees.net/wp-content/uploads/2016/07/200716_42.jpg', 
          alt: 'https://audit.msu.ru/wp-content/themes/audit/images/noavatar.png' },
        {id: 2, name: 'Maha', 
          src: 'https://deadbees.net/wp-content/uploads/2016/07/200716_41.jpg', 
          alt: 'https://audit.msu.ru/wp-content/themes/audit/images/noavatar.png' },
        {id: 3, name: 'Liza', 
          src: 'https://birdinflight.com/wp-content/uploads/2014/08/monkey-selfie-cover-e1462271269546.jpg', 
          alt: 'https://audit.msu.ru/wp-content/themes/audit/images/noavatar.png' },
      ]
    }
  },
  _callSubsccriber() { // _rerenderEntireTree() { 
    console.log('State changed');
  },

  getState() {
    return this._state;
  }, 
  subscribe(observer) {
    this._callSubsccriber = observer;
  },
  
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sidebarReducer(this._state.sideBar, action);

    this._callSubsccriber(this._state);
  },
};

window.store = store;
export default store;