import axios from "axios";
import { type } from "../types";

export const loginProfil = (payload) => {
    return async dispatch => {
        dispatch(startLoginProfil());
        try {
            const { status, data } = await axios.post("/api/v1/user/login", payload);
            if(status === 200){
                if(data.status === 200){
                    localStorage.setItem('token3WA',JSON.stringify(data.token));
                    localStorage.setItem('user3WA',JSON.stringify(data.user));
                    dispatch(successLoginProfil({
                        success:true,
                        msg:data.msg,
                        token:data.token,
                        user:data.user
                    }))
                }else{
                    dispatch(failureLoginProfil({
                        error:true,
                        msg:data.msg
                    }))
                }
            }else{
                dispatch(failureLoginProfil({
                    error:true,
                    msg:data.msg
                }))
            }
        } catch (e) {
            console.error(e);
        }
    }
}

const startLoginProfil = () => ({
    type: type.START_LOGIN_PROFIL
})

const successLoginProfil = (data) => ({
    type: type.SUCCESS_LOGIN_PROFIL,
    payload: {
        success: data.success,
        msg: data.msg,
        token: data.token,
        user: data.user
    }
})

const failureLoginProfil = (data) => ({
    type: type.FAILURE_LOGIN_PROFIL,
    payload: {
        error: data.error,
        msg: data.msg
    }
})