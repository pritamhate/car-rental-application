import React, {useState} from "react";
import "./login.css";

const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = e => {
        const {name, value} = e.target;
        //console.log(name, value);
        setUser({
            ...user,
            [name] : value
        })
    }

    return (
        <div className="login">
            {console.log("User", user)}
            <h1>Login</h1>
            <div>
                <input type="text" name="email" value={user.email} placeholder="Enter Email" onChange={handleChange}/>
                <input type="password" name="password" value={user.password} placeholder="Enter Password" onChange={handleChange}/>
                <button className="button">Login</button>
                or
                <button className="button">Register</button>
            </div>
        </div>
    )
}

export default Login;