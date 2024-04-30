import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectPage: React.FC = () => {
    let { id } = useParams<{ id: string }>();

    return (
        <div>
            <h1>Project Page</h1>
            <p>This page will show more details about project ID: {id}</p>
        </div>
    );
};

export default ProjectPage;
