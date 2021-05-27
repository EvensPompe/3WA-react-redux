import { type } from "../types";

export const logoutProfil = () => {
    return async dispatch => {
        dispatch(startLogoutProfil());
        try {
            localStorage.removeItem('token3WA');
            localStorage.removeItem('user3WA');

            dispatch(successLogoutProfil({
                msg: "Vous vous êtes déconnecté"
            }))
        } catch (e) {
            dispatch(failureLogoutProfil({
                error: true,
                msg: "Une erreur est survenue lors de la déconnexion"
            }))
        }
    }
}

const startLogoutProfil = () => ({
    type: type.START_LOGOUT
})

const successLogoutProfil = (data) => ({
    type: type.SUCCESS_LOGOUT,
    payload: {
        msg: data.msg
    }
})

const failureLogoutProfil = (data) => ({
    type: type.FAILURE_LOGOUT,
    payload: {
        error: data.error,
        msg: data.msg
    }
})