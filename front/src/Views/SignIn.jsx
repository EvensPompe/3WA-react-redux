import { Fragment } from "react";

const SignIn = () => {
    return (
        <Fragment>
            <form id="signIn">
                <div>
                    <label>Email</label>
                    <input type="text" placeholder="Entrer votre email"/>
                </div>
                <div>
                    <label>Mot de passe</label>
                    <input type="text" placeholder="Entrer votre mot de passe"/>
                </div>
            </form>
        </Fragment>
    )
};

export default SignIn;