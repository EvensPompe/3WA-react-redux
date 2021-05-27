import { type } from "../types";

export const logoutProfil = () => {
    return async dispatch => {
        dispatch(startLogoutProfil());
        try {
            localStorage.removeItem('token3WA');
            localStorage.removeItem('user3WA');
            dispatch(successLogoutProfil({
                token:null,
                user:null
            }))
        } catch (e) {
            return{
                error: true,
                msg: "Une erreur est survenue lors de la déconnexion"
            }
        }
    }
}

const startLogoutProfil = () => ({
    type: type.START_LOGOUT
})

const successLogoutProfil = ({token,user}) => ({
    type: type.SUCCESS_LOGOUT,
    payload: {
        token,
        user
    }
})