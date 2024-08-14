import React from 'react';
import './loginform.css'; 
import iqra from '../../Assets/iqra.png';
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const username = e.target.elements[0].value.trim();
        const password = e.target.elements[1].value.trim();
    
        console.log("Username entered:", username);
        console.log("Password entered:", password);
    
        if (username === "user" && password === "password") {
            navigate('/sidebar');
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
