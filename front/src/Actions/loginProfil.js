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
                        token:data.token,
                        user:data.user
                    }))
                    return {
                        success:true,
                        msg:data.msg
                    }
                }else{
                    return {
                        error:true,
                        msg:data.msg
                    }
                }
            }else{
                return {
                    error:true,
                    msg:data.msg
                }
            }
        } catch (e) {
            return {
                error:true,
                msg:"Une erreur est survenue"
            }
        }
    }
}

const startLoginProfil = () => ({
    type: type.START_LOGIN_PROFIL
})

const successLoginProfil = (data) => ({
    type: type.SUCCESS_LOGIN_PROFIL,
    payload: {
        token: data.token,
        user: data.user
    }
})