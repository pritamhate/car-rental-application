import React, {useState} from "react";
import "./register.css";
import loginCar from  "../../assets/images/car-hire.jpg";
import logo from  "../../assets/images/logo.png";
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
        usertype: "",
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
        const {name, email, usertype, password, reEnterPassword} = user;
        if(name && email && usertype && password && (password === reEnterPassword)) {
            alert("posted");
            axios.post("http://localhost:9002/register/", user)
            .then(res => {
                history('/login');
            })
        } else {
            alert("invalid input");
        }
        
    }

    return (
        // <div className="register">
        //     <h1>Register</h1>
        //     {/* {console.log("User", user)} */}
        //     <div>
        //         <input type="text" name="name" value={user.name} placeholder="Enter Nmae" onChange={handleChange}/>
        //         <input type="text" name="email" value={user.email} placeholder="Enter Email" onChange={handleChange}/>
        //         <input type="password" name="password" value={user.password} placeholder="Enter Password" onChange={handleChange}/>
        //         <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Confirm Password" onChange={handleChange}/>
        //         <button className="button" onClick={register}>Register</button>
        //         or
        //         <button className="button" onClick={handleClick}>Login</button>
        //     </div>
        // </div>

        <div className="wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 p-0">
                        <img src={loginCar} className="img-fluid login-car-img"/>
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-center bg-light">
                        <div className="register col-8 p-5 bg-white border border-secondary rounded shadow-lg">
                        <img src={logo} className="img-fluid logo-img"/>
                            <h1 className="fs-3 my-2 text-center text-uppercase">Register</h1>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input className="form-control" type="text" name="name" value={user.name} placeholder="Enter Name" onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input className="form-control" type="text" name="email" value={user.email} placeholder="Enter Email" onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">I Am:</label>
                                <select className="form-select" name="userType" id="userType" onChange={(usertype) => setUserChoice(usertype)}>
                                    <option>User</option>
                                    <option>Owner</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input className="form-control" type="password" name="password" value={user.password} placeholder="Enter Password" onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input className="form-control" type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Confirm Password" onChange={handleChange}/>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-primary button w-100" onClick={register}>Register</button>
                                <br/> Or <br/>
                                <button type="button" className="btn btn-outline-primary w-100" onClick={handleClick} >Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;