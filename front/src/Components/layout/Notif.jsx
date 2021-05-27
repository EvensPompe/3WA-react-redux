import { Fragment } from "react";
import "./Notif.css";
const Notif = ({ msg, error }) => {
    return (
        <Fragment>
            {error
                ?
                <section style={{ backgroundColor: "lightcoral", border: "2px solid darkred" }}>
                    <h2>{msg}</h2>
                </section>
                :
                <section style={{ backgroundColor: "lightgreen", border: "2px solid darkgreen" }}>
                    <h2>{msg}</h2>
                </section>
            }
        </Fragment>
    );
}

export default Notif;