import React, {useState} from "react";
import "./register.css";
import axios from "axios";

const Register = () => {
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
        const {name, email, password} = user;
        axios.post("http://localhost:9002/register/", user);
    }

    return (
        <div className="register">
            <h1>Register</h1>
            {console.log("User", user)}
            <div>
                <input type="text" name="name" value={user.name} placeholder="Enter Nmae" onChange={handleChange}/>
                <input type="text" name="email" value={user.email} placeholder="Enter Email" onChange={handleChange}/>
                <input type="password" name="password" value={user.password} placeholder="Enter Password" onChange={handleChange}/>
                <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Confirm Password" onChange={handleChange}/>
                <button className="button" onClick={register}>Register</button>
                or
                <button className="button">Login</button>
            </div>
        </div>
    )
}

export default Register;