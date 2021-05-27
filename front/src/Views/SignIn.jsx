import { Fragment, useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { loginProfil } from "../Actions/loginProfil";
import Notif from "../Components/layout/Notif";
import { useHistory } from "react-router-dom";


const SignIn = ({ success, error, msg }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successState, setSuccessState] = useState(false);
    const [errorState, setErrorsState] = useState(false);
    const [msgState, setMsgState] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        setErrorsState(error);
        setMsgState(msg);
        setSuccessState(success);
    }, [success, error, msg]);

    const signInSubmit = async (e) => {
        e.preventDefault();
        const submitData = {
            password,
            email
        };
        await loginProfil(submitData)(dispatch);
    };

    if (successState) {
        history.push("/profil");
    }

    return (
        <Fragment>
            {errorState || successState
                ?
                successState 
                ?
                <Notif msg={msgState}/>
                :
                <Notif msg={msgState} error={errorState}/>
            : null}
            <form id="signIn" onSubmit={signInSubmit}>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Entrer votre email" />
                </div>
                <div>
                    <label>Mot de passe</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Entrer votre mot de passe" />
                </div>
                <div>
                    <button type="submit">Se connecter</button>
                </div>
            </form>
        </Fragment>
    )
};
const mapStateToProps = ({ user: { success, error, msg } }) => ({
    success, error, msg
})

export default connect(mapStateToProps)(SignIn);