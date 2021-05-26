import { Switch, Route } from "react-router-dom";
import Home from "../Views/Home";
import SignIn from "../Views/SignIn";
import SignUp from "../Views/SignUp";
import NotFound from "../Views/NotFound";
import Profil from "../Views/Profil";

const Main = () =>{
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/SignIn" component={SignIn}/>
            <Route exact path="/signUp" component={SignUp}/>
            <Route exact path="/profil" component={Profil}/>
            <Route component={NotFound}/>
        </Switch>
    );
}

export default Main;