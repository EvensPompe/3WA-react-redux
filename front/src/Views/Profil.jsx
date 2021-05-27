import { Fragment } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

const Profil = ({ user,token }) => {
    const history = useHistory();

    if (!localStorage.getItem('token3WA') || !token ) {
        history.push("/");
    }

    return (
        <Fragment>
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
const mapStateToProps = ({ user: { user, token } }) => ({
    user,token
});
export default connect(mapStateToProps)(Profil);