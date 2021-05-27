import axios from "axios";

export const saveProfil = async (payload) => {
    try {
        const { status, data } = await axios.post("/api/v1/user/save", payload);
        if (status === 200) {
            if (!data.status || data.status === 200) {
                return {
                    success: true,
                    msg: data.msg
                }
            } else {
                return {
                    error: true,
                    msg: data.err.msg
                }
            }
        } else {
            return {
                error: true,
                msg: data.msg
            }
        }
    } catch (e) {
        return {
            error: true,
            msg: "Une erreur est survenue"
        }
    }
}