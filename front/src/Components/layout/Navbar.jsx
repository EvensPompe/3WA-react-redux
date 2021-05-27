import { connect, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
import { logoutProfil } from "../../Actions/logoutProfil";
const NavBar = ({ token }) => {
    const [tokenState, setTokenState] = useState();
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        setTokenState(token);
    }, [token])
    const logout = async (e) =>{
        e.preventDefault();
        await logoutProfil()(dispatch);
        history.push("/");
    }
    return (
        <nav>
            {tokenState !== null
                ?
                <ul>
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/profil">Profil</NavLink></li>
                    <li onClick={logout} style={{cursor:"pointer"}}>Deconnexion</li>
                </ul>
                :
                <ul>
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/signUp">Inscription</NavLink></li>
                    <li><NavLink to="/signIn">Connexion</NavLink></li>
                </ul>
            }

        </nav>
    )
}
const mapStateToProps = ({ user: { token } }) => ({
    token
});

export default connect(mapStateToProps)(NavBar);