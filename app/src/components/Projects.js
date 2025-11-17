import React from 'react';
import { SectionTitle, P } from './common';
import { projectsData } from '../data/projectsData';

const Projects = ({ setPage }) => (
    <div>
        <SectionTitle>PROJECTS</SectionTitle>
        {projectsData.map(p => (
            <div key={p.id} className="mb-6">
                <h3 className="text-white font-semibold mb-1">{p.title}</h3>
                <P>{p.short}</P>
            </div>
        ))}
        <button onClick={() => setPage('projects')} className="text-teal-300 hover:underline mt-4">See More Details →</button>
    </div>
);

export default Projects;