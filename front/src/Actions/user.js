import { type } from "../types";

import axios from "axios";

export const saveProfil = (payload) => {
    return async dispatch => {
        dispatch(startSaveProfil());
        try {
            console.log(payload)
            const { status, data } = await axios.post("http://localhost:8000/api/v1/user/save", payload);
            if (status === 200) {
                if (!data.status || data.status === 200) {
                    dispatch(
                        successSaveProfil({
                            success: true,
                            msg: data.msg
                        })
                    )
                } else {
                    dispatch(
                        failureSaveProfil({
                            error: true,
                            msg: data.err.msg
                        })
                    )
                }
            } else {
                dispatch(
                    failureSaveProfil({
                        error: true,
                        msg: data.msg
                    })
                )
            }
        } catch (e) {
            console.error(e);
        }
    }
}

const startSaveProfil = () => ({
    type: type.START_SAVE_PROFIL
})

const successSaveProfil = (data) => ({
    type: type.SUCCESS_SAVE_PROFIL,
    payload: {
        success:data.success,
        msg:data.msg
    }
})

const failureSaveProfil = (data) => ({
    type: type.FAILURE_SAVE_PROFIL,
    payload:{
        error:data.error,
        msg:data.msg
    }
})