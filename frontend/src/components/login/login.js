import React, {useState} from "react";
import "./login.css";
import loginCar from  "../../assets/images/car-hire.jpg";
import logo from  "../../assets/images/logo.png";
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
        <div className="wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 p-0">
                        <img src={loginCar} className="img-fluid login-car-img"/>
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-center bg-light">
                        <div className="login col-8 p-5 bg-white border border-secondary rounded shadow-lg">
                        <img src={logo} className="img-fluid logo-img"/>
                            <h1 className="fs-3 my-2 text-center text-uppercase">Login</h1>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input className="form-control" type="text" name="email" value={user.email} placeholder="Enter Email" onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input className="form-control" type="password" name="password" value={user.password} placeholder="Enter Password" onChange={handleChange}/>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-primary button w-100" onClick={login}>Login</button>
                                <br/> Or <br/>
                                <button type="button" className="btn btn-outline-primary w-100" onClick={handleClick} >Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;