import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = () => {
        if (username && password) {
            // Save credentials to local storage
            localStorage.setItem(username, password);
            // Navigate to success page
            navigate('/success', { state: { username, type: 'signup' } });
        } else {
            alert('Please enter a username and password to sign up.');
        }
    };

    const handleLogin = () => {
        if (username && password) {
            // Check credentials in local storage
            const storedPassword = localStorage.getItem(username);
            if (storedPassword && storedPassword === password) {
                // Navigate to success page
                navigate('/success', { state: { username, type: 'login' } });
            } else {
                alert('Invalid username or password. Please sign up first.');
            }
        } else {
            alert('Please enter a username and password to log in.');
        }
    };

    return (
        <div>
            <h2>Login / Signup</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    );
};

export default LoginPage;
