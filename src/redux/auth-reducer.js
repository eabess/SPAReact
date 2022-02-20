import { authAPI } from "../api/api";

let SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    email: null,
    userId: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {  
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                userId: action.userId,
                email: action.email,
                login: action.login,
                isAuth: true
            };

        default:
            return state;
    }
};

export const setAuthUserData = ( userId, email, login) => ({ 
    type: SET_USER_DATA, userId, email, login });
export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                dispatch(setAuthUserData( id, email, login ));
            }
        });
};

export default authReducer;