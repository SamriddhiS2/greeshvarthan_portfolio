import React from 'react';

const SectionTitle = ({ children }) => <h2 className="text-xl font-bold text-teal-300 mb-4 tracking-wider">{children}</h2>;

const Experience = () => {
  return (
    <div>
        <SectionTitle>// EXPERIENCE</SectionTitle>
        <div className="mb-6">
            <h3 className="text-white font-semibold">CFD Research Intern | Indian Space Research Organization (ISRO)</h3>
            <p className="text-xs text-slate-300 mb-2">Jan 2024 - Apr 2024</p>
            <ul className="list-none pl-4 text-white">
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Contributed to the design and performance analysis of advanced propeller systems for autonomous space exploration bots, tailored for operation in low-gravity and vacuum environments.</li>
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Presented design findings and recommendations of the propeller systems to senior engineers and contributed to iterative design improvements.</li>
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Employed STAR-CCM+ to perform detailed CFD simulations, optimizing the aerodynamic performance and efficiency of propeller systems under provided conditions.</li>
            </ul>
        </div>
        <div className="mb-6">
            <h3 className="text-white font-semibold">Software Engineering Intern | Single Point Solutions Pvt. Ltd</h3>
            <p className="text-xs text-slate-300 mb-2">Jun 2023 - Jul 2023</p>
            <ul className="list-none pl-4 text-white">
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Gained foundational experience in Python programming by developing simple scripts for data processing and automation tasks.</li>
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Learned key Python libraries (e.g., NumPy, Pandas) and applied them to small-scale data analysis tasks.</li>
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Collaborated with team members to implement basic Python-based tools, contributing to daily tasks while building core coding skills.</li>
            </ul>
        </div>
    </div>
  )
}

export default Experience;