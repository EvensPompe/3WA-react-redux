import { type } from "./types"
const initialState = {
    token: null,
    user: null,
    error: false,
    success: false,
    msg: ""
};

// Use the initialState as a default value
export default function reducer(state = initialState, action) {
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
                success:action.payload.success,
                error: false,
                msg:action.payload.msg
            }
        case type.FAILURE_SAVE_PROFIL:
            console.log(type.FAILURE_SAVE_PROFIL);
            return {
                ...state,
                success:false,
                error: action.payload.error,
                msg: action.payload.msg
            }
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
}