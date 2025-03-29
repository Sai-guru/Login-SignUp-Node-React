import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SuccessPage from './components/SuccessPage';
import './App.css'
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/success" element={<SuccessPage />} />
            </Routes>
        </Router>
    );
};

export default App;
