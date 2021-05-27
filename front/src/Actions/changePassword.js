import axios from "axios";

export const changePassword = async (payload) => {
    try {
        const { data, status } = await axios.post(`/api/v1/user/changePassword/${payload.id}`, payload.data);
        console.log(data, status);
        if (status === 200) {
            if (data.status === 200) {
                return {
                    success: true,
                    msg: data.msg
                }
            } else {
                return {
                    error: true,
                    msg: data.msg
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