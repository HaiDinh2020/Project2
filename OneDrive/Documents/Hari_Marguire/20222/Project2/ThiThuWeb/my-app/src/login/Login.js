import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './Login.css';
import { login } from "../navigation/NavibarSlice";
import { submitInfor } from "../thiThu/trangcanhan/TrangCaNhanSlice";

function Login() {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch()

    let handleSubmit = (e) => {
        e.preventDefault();
        axios.post(

            'http://localhost:5000/login',
            {
                userName,
                password
            }
        ).then((res) => {
            if (res.data.message === "success") {
                
                dispatch(login())
                dispatch(submitInfor(res.data.userInfor))
                navigate('/trang-chu')
            } else {
                alert(res.data.message);
            }
        }).catch((error) => {
            if (error.response) {
                // When response status code is out of 2xxx range
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                //When no response was received after request was made
                console.log(error.request);
            } else {
                // Error
                console.log(error.message);
            }
        })


    }
    return (
        <div className="login">
            <form className="login-form" onSubmit={handleSubmit.bind(this)}>

                <div className="login-part">
                    <label htmlFor="userName"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="userName" required
                        onChange={e => setUsername(e.target.value)} />

                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" required
                        onChange={e => setPassword(e.target.value)} />

                    <label className="rememberMe">
                        <input type="checkbox" name="remember" /> Remember me
                    </label>
                    <button type="submit">Login</button>
                </div>

                <div className="login-part" >
                    <Link to="/signup"><button type="button" className="signUpbtn">Sign up</button> </Link>
                    <span className="psw">Forgot password?</span>
                </div>
            </form>
        </div>
    )
}

export default Login;