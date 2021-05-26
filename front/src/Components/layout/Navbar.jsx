import { NavLink } from "react-router-dom";
import "./Navbar.css";
const NavBar = () =>{
    return(
        <nav>
            <ul>
                <li><NavLink to="/">Accueil</NavLink></li>
                <li><NavLink to="/signUp">Inscription</NavLink></li>
                <li><NavLink to="/signIn">Connexion</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar;