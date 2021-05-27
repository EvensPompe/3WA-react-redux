import { type } from "../types"
const initialState = {
    token: localStorage.getItem('token3WA'),
    user: JSON.parse(localStorage.getItem('user3WA')),
    error: false,
    success: false,
    msg: ""
};

// Use the initialState as a default value
export default function userReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        // Do something here based on the different types of actions
        case type.START_SAVE_PROFIL:
            console.log(type.START_SAVE_PROFIL);
            return {
                ...state
            }
        case type.SUCCESS_SAVE_PROFIL:
            console.log(type.SUCCESS_SAVE_PROFIL);
            return {
                ...state,
                success: action.payload.success,
                error: false,
                msg: action.payload.msg
            }
        case type.FAILURE_SAVE_PROFIL:
            console.log(type.FAILURE_SAVE_PROFIL);
            return {
                ...state,
                success: false,
                error: action.payload.error,
                msg: action.payload.msg
            }

        case type.START_LOGIN_PROFIL:
            console.log(type.START_LOGIN_PROFIL);
            return {
                ...state
            }
        case type.SUCCESS_LOGIN_PROFIL:
            console.log(type.SUCCESS_LOGIN_PROFIL);
            return {
                ...state,
                success: action.payload.success,
                error: false,
                msg: action.payload.msg,
                user: action.payload.user,
                token: action.payload.token
            }
        case type.FAILURE_LOGIN_PROFIL:
            console.log(type.FAILURE_LOGIN_PROFIL);
            return {
                ...state,
                success: false,
                error: action.payload.error,
                msg: action.payload.msg
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
                success: false,
                error: false,
                token: null,
                user: null,
                msg: action.payload.msg
            }
        case type.FAILURE_LOGOUT:
            console.log(type.FAILURE_LOGOUT);
            return {
                ...state,
                success: false,
                error: action.payload.error,
                msg: action.payload.msg
            }
        case type.START_CHANGE_PASSWORD:
            console.log(type.START_CHANGE_PASSWORD);
            return {
                ...state
            }
        case type.SUCCESS_CHANGE_PASSWORD:
            console.log(type.SUCCESS_CHANGE_PASSWORD);
            return {
                ...state,
                success:action.payload.success,
                error:false,
                msg:action.payload.msg
            }
        case type.FAILURE_CHANGE_PASSWORD:
            console.log(type.FAILURE_CHANGE_PASSWORD);
            return {
                ...state,
                success:false,
                error:action.payload.error,
                msg:action.payload.msg
            }
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
}