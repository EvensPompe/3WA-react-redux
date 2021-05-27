import { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import Notif from "../Components/layout/Notif";

const Home = ({ success, error, msg }) => {
    const [successState, setSuccessState] = useState(false);
    const [errorState, setErrorsState] = useState(false);
    const [msgState, setMsgState] = useState("");
    useEffect(() => {
        setErrorsState(error);
        setMsgState(msg);
        setSuccessState(success);
    }, [success, error, msg]);

    return (
        <Fragment>
            {errorState || successState
                ?
                successState 
                ?
                <Notif msg={msgState}/>
                :
                <Notif msg={msgState} error={errorState}/>
            : null}
            <h1>Home</h1>
        </Fragment>
    );
}

const mapStateToProps = ({ user: { success, error, msg } }) => ({
    success, error, msg
})

export default connect(mapStateToProps)(Home);