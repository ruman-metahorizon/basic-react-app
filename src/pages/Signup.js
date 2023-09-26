import Table from 'react-bootstrap/Table';
import "./signup.css";
import { useState } from 'react';
import "../api/api";
import { createUser } from '../api/api';

function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(email, password);

    function submit() {
        createUser({
            "email": email,
            "password": password
        })
    }

    return (
        <div className="wrapper">
            <div className="title-text">
                <div className="title login">Login Form</div>
                <div className="title signup">Signup Form</div>
            </div>
            <div className="form-container">
                <div className="slide-controls">
                    <input type="radio" name="slide" id="login" defaultChecked="" />
                    <input type="radio" name="slide" id="signup" />
                    <label htmlFor="login" className="slide login">
                        Login
                    </label>
                    <label htmlFor="signup" className="slide signup">
                        Signup
                    </label>
                    <div className="slider-tab" />
                </div>
                <div className="form-inner">
                    <form className="login">
                        <div className="field">
                            <input type="text" placeholder="Email Address" required="" onChange={(event) => setEmail(event.target.value)} defaultValue={email} />
                        </div>
                        <div className="field">
                            <input type="password" placeholder="Password" required="" onChange={(event) => setPassword(event.target.value)} defaultValue={password} />
                        </div>
                        <div className="pass-link">
                            <a href="#">Forgot password?</a>
                        </div>
                        <div className="field btn">
                            <div className="btn-layer" />
                            <input onClick={submit} type="submit" defaultValue="Login" />
                        </div>
                        <div className="signup-link">
                            Not a member? <a href="">Signup now</a>
                        </div>
                    </form>
                    <form action="#" className="signup">
                        <div className="field">
                            <input type="text" placeholder="Email Address" required="" onChange={(event) => setEmail(event.target.value)} defaultValue={email} />
                        </div>
                        <div className="field">
                            <input type="password" placeholder="Password" required="" onChange={(event) => setPassword(event.target.value)} defaultValue={password} />
                        </div>
                        <div className="field">
                            <input type="password" placeholder="Confirm password" required="" />
                        </div>
                        <div className="field btn">
                            <div className="btn-layer" />
                            <button type="submit" defaultValue="Signup" />
                        </div>
                    </form>
                </div>
            </div>
        </div>


    );
}

export default Signup;