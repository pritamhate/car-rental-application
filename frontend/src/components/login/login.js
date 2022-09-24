import React, {useState} from "react";
import "./login.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = ({setLoginUser}) => {

    const history = useNavigate();

    const handleClick = () => {
        // 👇️ navigate programmatically
        history('/register');
      };

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

    const login = () => {
        axios.post("http://localhost:9002/login/", user)
        .then(res => {
            alert(res.data.message);
            setLoginUser(res.data.user);
            history('/');
        })
    }

    return (
        <div className="login">
            {/* {console.log("User", user)} */}
            <h1>Login</h1>
            <div>
                <input type="text" name="email" value={user.email} placeholder="Enter Email" onChange={handleChange}/>
                <input type="password" name="password" value={user.password} placeholder="Enter Password" onChange={handleChange}/>
                <button className="button" onClick={login}>Login</button>
                or
                <button className="button" onClick={handleClick}>Register</button>
            </div> 
        </div>
    )
}

export default Login;