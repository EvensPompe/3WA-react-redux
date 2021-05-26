import "./ErrorNotif.css";
const ErrorNotif = ({ msg }) =>{
    return(
        <section>
            <h2>{ msg }</h2>
        </section>
    );
}

export default ErrorNotif;