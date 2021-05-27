import { type } from "../types"
const initialState = {
    token: localStorage.getItem('token3WA'),
    user: JSON.parse(localStorage.getItem('user3WA')),
    error: false,
    success: false
};

// Use the initialState as a default value
export default function userReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        // Do something here based on the different types of actions
        case type.START_LOGIN_PROFIL:
            console.log(type.START_LOGIN_PROFIL);
            return {
                ...state
            }
        case type.SUCCESS_LOGIN_PROFIL:
            console.log(type.SUCCESS_LOGIN_PROFIL);
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        case type.START_LOGOUT:
            console.log(type.START_LOGOUT);
            return {
                ...state,
            }
        case type.SUCCESS_LOGOUT:
            console.log(type.SUCCESS_LOGOUT);
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user
            }
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
}