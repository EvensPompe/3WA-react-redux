import { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { saveProfil } from "../Actions/saveProfil";
import Notif from "../Components/layout/Notif";
import "./SignUp.css";
const SignUp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [zip, setZip] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [successState, setSuccessState] = useState(false);
    const [errorState, setErrorsState] = useState(false);
    const [msgState, setMsgState] = useState("");
    const history = useHistory();

    const signUpSubmit = async (e) => {
        e.preventDefault();
        const submitData = {
            firstName,
            lastName,
            email,
            password,
            address,
            zip,
            city,
            phone
        };
        const {success ,error ,msg } = await saveProfil(submitData);
        setSuccessState(success);
        setErrorsState(error);
        setMsgState(msg);
    };
    
    if (successState) {
        history.push("/profil");
    }
    return (
        <Fragment>
            {errorState
                ?
                <Notif msg={msgState} error={errorState}/>
                :
                null
            }
            <form onSubmit={signUpSubmit} id="signUp">
                <div>
                    <div>
                        <label>Nom</label>
                        <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div>
                        <label>Prénom</label>
                        <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Mot de passe</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div>
                    <div>
                        <label>Adresse Postal</label>
                        <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div>
                        <label>Code Postal</label>
                        <input type="text" id="zip" pattern="[0-9]{5}" maxLength="5" value={zip} onChange={(e) => setZip(e.target.value)} />
                    </div>
                    <div>
                        <label>Ville</label>
                        <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <div>
                        <label>Numéro de téléphone</label>
                        <input type="text" id="phone" pattern="[0-9]{10}" maxLength="10" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div>
                        <button type="submit" id="subButton">S'inscrire</button>
                    </div>
                </div>
            </form>
        </Fragment>
    );
}

export default SignUp;