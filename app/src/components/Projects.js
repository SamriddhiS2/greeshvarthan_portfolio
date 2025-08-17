import React from 'react';

const SectionTitle = ({ children }) => <h2 className="text-xl font-bold text-teal-300 mb-4 tracking-wider">{children}</h2>;
const P = ({ children }) => <p className="mb-4 text-white font-light">{children}</p>;

export const projectsData = [
    { id: 'proj-1', title: 'Solid Propellant Engineer for Hypersonic Missile', short: '...', long: 'Worked on this project to edsign a solid rocket engine for an air launched hypersonic missile with a design mean thrust of 0.4MN with a "no smoke grade" propellant, to reduce missile visibility and so it vulnerability', image: 'https://placehold.co/600x400/0a192f/64ffda?text=Hypersonic+Missile' },
    { id: 'proj-2', title: 'Deep Analysis of Sound Pressure Level (SPL) in Aircraft', short: '...', long: 'Conducted a comprehensive study and analysis of the Sound Pressuer Levels (SPL) between Airbus A319 and Bombardier Dash 8 Q400; proposed a universal approach to enhanve passenger comfort during different flight regimes.', image: 'https://placehold.co/600x400/0a192f/64ffda?text=Deep+Analysis+SPL' },
    { id: 'proj-3', title: 'Investigation of Lateral and Longitudinal Stability of Boeing 747', short: '...', long: 'Produced a thorough report to assess the aircraft\'s performance, utilizing MATLAB to analyze flight curves. Evaluated the aircraft\'s longitudinal stability, lateral stability, and compliance with quality standards.', image: 'https://placehold.co/600x400/0a192f/64ffda?text=Boeing+747' },
    { id: 'proj-4', title: 'CubeSat 2021 - LiFi in Space', short: '...', long: 'Presented the idea of LiFi communication inside a 1U satellite where preprogrammed data can be transferred between a transmitter and a receiver by means of Light fidelity.', image: 'https://placehold.co/600x400/0a192f/64ffda?text=CubeSat+Lifi' },
];

const Projects = ({ setPage }) => (
    <div>
        <SectionTitle>// PROJECT_FILES</SectionTitle>
        {projectsData.map(p => (
            <div key={p.id} className="mb-6">
                <h3 className="text-white font-semibold mb-1">{p.title}</h3>
                <P>{p.short}</P>
            </div>
        ))}
        <button onClick={() => setPage('projects')} className="text-teal-300 hover:underline mt-4">See More Details →</button>
    </div>
)

export default Projects;