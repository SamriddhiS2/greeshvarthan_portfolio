import React from 'react';

const SectionTitle = ({ children }) => <h2 className="text-xl font-bold text-teal-300 mb-4 tracking-wider">{children}</h2>;

const Skills = () => {
  return (
    <div>
        <SectionTitle>// SKILLS_MATRIX</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
                <h3 className="text-white font-semibold mb-2 border-b border-slate-700 pb-1">Languages</h3>
                <ul className="list-none pl-4 text-white">
                <li className="relative before:content-['//'] before:absolute before:left-[-1.5em] before:text-slate-500">Python</li>
                <li className="relative before:content-['//'] before:absolute before:left-[-1.5em] before:text-slate-500">C</li>
                <li className="relative before:content-['//'] before:absolute before:left-[-1.5em] before:text-slate-500">C++</li>
                <li className="relative before:content-['//'] before:absolute before:left-[-1.5em] before:text-slate-500">MATLAB</li>
                </ul>
            </div>
            <div>
                <h3 className="text-white font-semibold mb-2 border-b border-slate-700 pb-1">Software</h3>
                <ul className="list-none pl-4 text-white">
                <li className="relative before:content-['//'] before:absolute before:left-[-1.5em] before:text-slate-500">SolidWorks</li>
                <li className="relative before:content-['//'] before:absolute before:left-[-1.5em] before:text-slate-500">CREO</li>
                <li className="relative before:content-['//'] before:absolute before:left-[-1.5em] before:text-slate-500">CATIA</li>
                <li className="relative before:content-['//'] before:absolute before:left-[-1.5em] before:text-slate-500">Ansys</li>
                <li className="relative before:content-['//'] before:absolute before:left-[-1.5em] before:text-slate-500">Siemens StarCCM+</li>
                <li className="relative before:content-['//'] before:absolute before:left-[-1.5em] before:text-slate-500">MSC Patran</li>
                <li className="relative before:content-['//'] before:absolute before:left-[-1.5em] before:text-slate-500">Abaqus</li>
                </ul>
            </div>
            <div>
                <h3 className="text-white font-semibold mb-2 border-b border-slate-700 pb-1">Concepts</h3>
                <ul className="list-none pl-4 text-white">
                <li className="relative before:content-['//'] before:absolute before:left-[-1.5em] before:text-slate-500">Orbital Mechanics</li>
                <li className="relative before:content-['//'] before:absolute before:left-[-1.5em] before:text-slate-500">CFD / FEA</li>
                <li className="relative before:content-['//'] before:absolute before:left-[-1.5em] before:text-slate-500">DFA / DFM / DFE</li>
                <li className="relative before:content-['//'] before:absolute before:left-[-1.5em] before:text-slate-500">GD&T</li>
                <li className="relative before:content-['//'] before:absolute before:left-[-1.5em] before:text-slate-500">Rocket Propulsion</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Skills;