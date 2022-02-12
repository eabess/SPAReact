let initialState = {
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
};

const sidebarReducer = (state = initialState, action) => {
    
    return state;
};

export default sidebarReducer;