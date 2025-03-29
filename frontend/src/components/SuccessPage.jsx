import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SuccessPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { username, type } = location.state || {};

    const goToHome = () => {
        navigate('/'); // Redirect to the default page
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Hi {username}!</h2>
            {type === 'login' ? (
                <p>Your login was successful!</p>
            ) : (
                <p>Your signup was successful!</p>
            )}
            <button
                onClick={goToHome}
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#4caf50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Home
            </button>
        </div>
    );
};

export default SuccessPage;
