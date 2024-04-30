import React from 'react';
import { Link } from 'react-router-dom';
import './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1>My Website</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
            </nav>
        </header>
    );
};

export default Header;
