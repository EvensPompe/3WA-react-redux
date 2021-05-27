import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { loginProfil } from "../Actions/loginProfil";
import Notif from "../Components/layout/Notif";
import { useHistory } from "react-router-dom";


const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successState, setSuccessState] = useState(false);
    const [errorState, setErrorsState] = useState(false);
    const [msgState, setMsgState] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const signInSubmit = async (e) => {
        e.preventDefault();
        const submitData = {
            password,
            email
        };
        const {success ,error ,msg } = await loginProfil(submitData)(dispatch);
        setSuccessState(success);
        setErrorsState(error);
        setMsgState(msg);
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

export default SignIn;