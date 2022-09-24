import React, {useState} from "react";
import "./register.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Register = () => {

    const history = useNavigate();

    const handleClick = () => {
        // 👇️ navigate programmatically
        history('/login');
    };

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    });

    const handleChange = e => {
        const {name, value} = e.target;
        //console.log(name, value);
        setUser({
            ...user,
            [name] : value
        })
    }

    const register = () => {
        const {name, email, password, reEnterPassword} = user;
        if(name && email && password && (password === reEnterPassword)) {
            //alert("posted");
            axios.post("http://localhost:9002/register/", user)
            .then(res => {
                history('/login');
            })
        } else {
            alert("invalid input");
        }
        
    }

    return (
        <div className="register">
            <h1>Register</h1>
            {/* {console.log("User", user)} */}
            <div>
                <input type="text" name="name" value={user.name} placeholder="Enter Nmae" onChange={handleChange}/>
                <input type="text" name="email" value={user.email} placeholder="Enter Email" onChange={handleChange}/>
                <input type="password" name="password" value={user.password} placeholder="Enter Password" onChange={handleChange}/>
                <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Confirm Password" onChange={handleChange}/>
                <button className="button" onClick={register}>Register</button>
                or
                <button className="button" onClick={handleClick}>Login</button>
            </div>
        </div>
    )
}

export default Register;