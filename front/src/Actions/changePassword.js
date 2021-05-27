import axios from "axios";
import { type } from "../types";

export const changePassword = (payload) => {
    return async dispatch => {
        dispatch(startChangePassword())
        try {
            const { data, status } = await axios.post(`/api/v1/user/changePassword/${payload.id}`, payload.data);
            console.log(data,status);
            if (status === 200) {
                if(data.status === 200){
                    dispatch(successChangePassword({
                        success:true,
                        msg:data.msg
                    }))
                }else{
                    dispatch(failureChangePassword({
                        error:true,
                        msg:data.msg
                    }))
                }
            } else {
                dispatch(failureChangePassword({
                    error:true,
                    msg:data.msg
                }))
            }
        } catch (e) {
            dispatch(failureChangePassword({
                error: true,
                msg: "Une erreur est survenue"
            }))
        }
    }
}

const startChangePassword = () => ({
    type: type.START_CHANGE_PASSWORD
});

const successChangePassword = ({ success, msg }) => ({
    type: type.SUCCESS_CHANGE_PASSWORD,
    payload: {
        success,
        msg
    }
});

const failureChangePassword = ({ error, msg }) => ({
    type: type.FAILURE_CHANGE_PASSWORD,
    payload: {
        error,
        msg
    }
});