import { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import Notif from "../Components/layout/Notif";

const Profil = ({ user, success, error, msg }) => {
    const history = useHistory();
    const [successState, setSuccessState] = useState(false);
    const [errorState, setErrorsState] = useState(false);
    const [msgState, setMsgState] = useState("");
    useEffect(() => {
        setErrorsState(error);
        setMsgState(msg);
        setSuccessState(success);
    }, [success, error, msg]);

    if (!localStorage.getItem('token3WA')) {
        history.push("/");
    }

    return (
        <Fragment>
            {errorState || successState
                ?
                successState
                    ?
                    <Notif msg={msgState} />
                    :
                    <Notif msg={msgState} error={errorState} />
                : null}
            {user
                ?
                <Fragment>
                    <h1>{user.firstName} {user.lastName}</h1>
                    <h2>email: {user.email}</h2>
                    <h2>ville: {user.city}</h2>
                    <h2>numéro de téléphone : {user.phone}</h2>
                    <div>
                        <NavLink to={`/profil/password-modif/${user.key_id}`}>
                            <button>Modifier le mot de passe</button>
                        </NavLink>
                    </div>
                </Fragment>
                :
                <h2>L'utilisateur n'existe pas !</h2>
            }
        </Fragment>
    );
}
const mapStateToProps = ({ user: { user, success, error, msg } }) => ({
    user,success, error, msg
});
export default connect(mapStateToProps)(Profil);