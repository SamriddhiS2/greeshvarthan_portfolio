import React from 'react';

const SectionTitle = ({ children }) => <h2 className="text-xl font-bold text-teal-300 mb-4 tracking-wider">{children}</h2>;

const Experience = () => {
  return (
    <div>
        <SectionTitle>// EXPERIENCE</SectionTitle>
        <div className="mb-6">
            <h3 className="text-white font-semibold">Mechanical Design Engineer | Elementrailer</h3>
            <p className="text-xs text-slate-300 mb-2">Oct 2025 - Present</p>
            <ul className="list-none pl-4 text-white">
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Create and iterate SolidWorks/Onshape models for trailer structural sub-systems (frame, suspension, and battery cradle).</li>
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Conduct ANSYS structural, fatigue, and thermal analyses for the 10k lb-GVWR chassis and mounting systems.</li>
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Support materials research, focusing on lightweight and durable design for aerospace-grade trailer applications.</li>
            </ul>
        </div>
        <div className="mb-6">
            <h3 className="text-white font-semibold">Structures Member | Washington Hyperloop</h3>
            <p className="text-xs text-slate-300 mb-2">Sep 2024 - Dec 2024</p>
            <ul className="list-none pl-4 text-white">
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Collaborated with Washington Hyperloop's structures team to design the structural framework for a vertical Tunnel Boring Machine (TBM).</li>
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Applied principles of materials science and mechanics to select appropriate materials for the TBM structure, balancing strength and weight requirements.</li>
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Utilized SolidWorks to create detailed 3D models of the TBM's structural components and conducted FEA simulations to determine stress and failure.</li>
            </ul>
        </div>
        <div className="mb-6">
            <h3 className="text-white font-semibold">CFD Research Intern | Indian Space Research Organization (ISRO)</h3>
            <p className="text-xs text-slate-300 mb-2">Jan 2024 - Apr 2024</p>
            <ul className="list-none pl-4 text-white">
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Design and analysis of advanced propeller systems for autonomous space exploration bots, tailored for operation in low-gravity and vacuum environments.</li>
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Presented design findings and recommendations of the propeller systems to senior engineers and contributed to iterative design improvements.</li>
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Employed STAR-CCM+ to perform detailed CFD simulations, optimizing the aerodynamic performance and efficiency of propeller systems under provided conditions.</li>
            </ul>
        </div>
    </div>
  )
}

export default Experience;