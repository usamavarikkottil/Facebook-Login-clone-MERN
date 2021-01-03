import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./styles/RightBox.css";
import axios from "../axios";

function RegisterBox() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const submitRegister = async (e) => {

        e.preventDefault();
        await axios.post("/user/register", {
            withCredentials: true,
            username: username,
            password: password,
        }).then((res) => {
            // handle success
            console.log("success:", res);
            setMessage("Registration success")

        })
            .catch(function (error) {
                // handle error
                console.log("error:", { error });
                setMessage("Registration Failed...")
            })

        setUsername("");
        setPassword("");

    }
    return (
        <div className="right_box">
            <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username or Email address " />
            <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <input className="btn btn_blue" onClick={submitRegister} type="submit" value="Register" />
            <span className="error_message">{message}</span>

            <div className="form_border"></div>


            <Link to="/login" className="btn btn_green">Login to your account</Link>

        </div>
    );
}

export default RegisterBox;
