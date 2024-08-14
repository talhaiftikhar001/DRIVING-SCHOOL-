import React from 'react';
import './loginform.css'; 
import iqra from '../../Assets/iqra.png';
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Dummy authentication logic
        const username = e.target[0].value;
        const password = e.target[1].value;

        if (username === "user" && password === "password") {
            // Navigate to the dashboard if credentials are correct
            navigate('/dashboard');
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="login-page">
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <div className="logo-container">
                    <img src={iqra} alt="Login Logo" className="login-logo" /> {/* Image instead of text */}
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <FaUser className='icon'/>
               </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock className='icon'/>
                </div>
               <div className='remember-forgot'>
                    <label><input type="checkbox" /> Remember me </label>
                    <a href="#"> Forgot Password? </a>
               </div>
               <button type='submit'>Login</button>
            </form>
        </div>
        </div>
    );
};

export default LoginForm;
