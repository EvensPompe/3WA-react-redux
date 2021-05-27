import { Fragment, useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { changePassword } from "../Actions/changePassword";
import Notif from "../Components/layout/Notif";

const ModifPassword = ({ match: { params: { id } }, success, error, msg }) => {
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
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
    
    const modifSubmit = async (e) => {
        e.preventDefault();
        let submitData = {
            id,
            data: {
                password1,
                password2
            }
        }
        await changePassword(submitData)(dispatch);
    };

    const backToProfile = (e) =>{
        e.preventDefault();
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
            <section>
                <button onClick={backToProfile}>Retour</button>
            </section>
            <form onSubmit={modifSubmit}>
                <div>
                    <label htmlFor="password1">Nouveau Mot de passe</label>
                    <input type="password" name="password1" value={password1} onChange={(e) => setPassword1(e.target.value)} id="password1" />
                </div>
                <div>
                    <label htmlFor="password2">Confirmer le nouveau mot de passe</label>
                    <input type="password" name="password2" value={password2} onChange={(e) => setPassword2(e.target.value)} id="password2" />
                </div>
                <div>
                    <button type="submit">Modifier</button>
                </div>
            </form>
        </Fragment>
    );
}

const mapStateToProps = ({ user: { success, error, msg } }) => ({
    success, error, msg
});

export default connect(mapStateToProps)(ModifPassword);