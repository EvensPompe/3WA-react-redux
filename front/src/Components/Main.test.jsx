import { shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Main from "./Main";

describe('Main.jsx', () => {
    it("should route to '/' and render Home component", () => {
        let wrapper = shallow(
            <MemoryRouter initialEntries={["/"]}>
                <Main />
            </MemoryRouter>
        );
        expect(wrapper.html()).toBe("<h1>Home</h1>");
    });

    it("should route to '/signIn' and render SignIn component", ()=>{
        let wrapper = shallow(
            <MemoryRouter initialEntries={["/signIn"]} >
                <Main/>
            </MemoryRouter>
        )
        expect(wrapper.html()).toBe("<form id=\"signIn\"><div><label>Email</label><input type=\"text\" placeholder=\"Entrer votre email\"/></div><div><label>Mot de passe</label><input type=\"text\" placeholder=\"Entrer votre mot de passe\"/></div></form>");
    })

    it("should route to '/signUp' and render SignUp component", ()=>{
        let wrapper = shallow(
            <MemoryRouter initialEntries={["/signUp"]} >
                <Main/>
            </MemoryRouter>
        )
        expect(wrapper.html()).toBe("<form id=\"signUp\"><div><div><label>Nom</label><input type=\"text\" id=\"firstName\" value=\"\"/></div><div><label>Prénom</label><input type=\"text\" id=\"lastName\" value=\"\"/></div><div><label>Email</label><input type=\"email\" id=\"email\" value=\"\"/></div><div><label>Mot de passe</label><input type=\"password\" id=\"password\" value=\"\"/></div></div><div><div><label>Adresse Postal</label><input type=\"text\" id=\"address\" value=\"\"/></div><div><label>Code Postal</label><input type=\"text\" id=\"zip\" pattern=\"[0-9]{5}\" maxLength=\"5\" value=\"\"/></div><div><label>Ville</label><input type=\"text\" id=\"city\" value=\"\"/></div><div><label>Numéro de téléphone</label><input type=\"text\" id=\"phone\" pattern=\"[0-9]{10}\" maxLength=\"10\" value=\"\"/></div><div><button type=\"submit\" id=\"subButton\">S&#x27;inscrire</button></div></div></form>");
    })
})
