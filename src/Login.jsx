import React, { useState } from 'react';
import './Login.css';

const LoginComponent = ({ onLogin }) => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Dummy login process
        if (loginEmail === 'user@example.com' && loginPassword === 'password') {
            onLogin(); // Call the onLogin function passed as a prop
        } else {
            setLoginError('Invalid email or password');
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <div className="login-banner-container">
                    <img src="banner.jpg" alt="Banner" className="login-banner-image" />
                    <div className="login-text-overlay">
                        <h2>Craving a
                            <br />
                            drink?
                        </h2>
                    </div>
                </div>
                <div className="login-form-container">
                    <img src="logo.svg" alt="Logo" className="login-logo" />
                    <h3 className="login-welcome-message">Hi, Brewtista!</h3>
                    {loginError && <p className="login-error">{loginError}</p>}
                    <form onSubmit={handleLoginSubmit}>
                        <div className="login-input-container">
                            <input
                                type="email"
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                                required
                                className="login-input-field"
                            />
                            <label className="login-input-label">Email</label>
                        </div>
                        <div className="login-input-container">
                            <input
                                type="password"
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                                required
                                className="login-input-field"
                            />
                            <label className="login-input-label">Password</label>
                        </div>
                        <button type="submit">Login</button>
                        <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
                    </form>
                    <p>
                        Don't have an account? 
                        <a href="/signup" className="signup-link"> Sign up now</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent; 