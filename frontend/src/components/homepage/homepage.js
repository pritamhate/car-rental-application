import React from "react";
import "./homepage.css";

const Homepage = ({setLoginUser}) => {
    return (
        <div className="homepage">
            <h1>Homepage</h1>
            <div className="btnWrap">
                <a className="button" onClick={() => setLoginUser({})}>Logout</a>
            </div>
        </div>
    )
}

export default Homepage;