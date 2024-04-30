import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage: React.FC = () => {
    return (
        <div>
            <h1>Portfolio Page</h1>
            <p>Here is a collection of our work and projects.</p>
            <ul>
                <li><Link to="/projects/1">Project 1</Link></li>
                <li><Link to="/projects/2">Project 2</Link></li>
                <li><Link to="/projects/3">Project 3</Link></li>
            </ul>
        </div>
    );
};

export default PortfolioPage;
