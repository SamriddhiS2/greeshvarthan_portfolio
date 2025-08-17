import React from 'react';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { XIcon } from './Icons';

const DataPanel = ({ section, onClose, setPage }) => {
    const contentMap = {
        about: <About />,
        experience: <Experience />,
        skills: <Skills />,
        projects: <Projects setPage={setPage} />,
        contact: <Contact />,
    };

    const titleMap = {
        about: "About Me",
        experience: "Experience",
        skills: "Skills Matrix",
        projects: "Project Files",
        contact: "Contact Channel",
    };

    const panelClasses = `
        fixed top-1/2 right-4 md:right-8 transform -translate-y-1/2
        w-[90vw] max-w-lg h-[80vh]
        bg-slate-900/70 backdrop-blur-md border border-slate-700 rounded-lg shadow-2xl
        transition-all duration-500 ease-in-out
        flex flex-col
        ${section ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16 pointer-events-none'}
    `;

    return (
        <div className={panelClasses}>
            <div className="flex-shrink-0 p-6 md:p-8 flex justify-between items-center border-b border-slate-700">
                <h3 className="font-mono text-lg text-white">{titleMap[section] || "DATA"}</h3>
                <button onClick={onClose} className="text-slate-400 hover:text-teal-300 transition-colors">
                    <XIcon />
                </button>
            </div>
            <div className="flex-grow p-6 md:p-8 pt-4 overflow-y-auto min-h-0">
                {contentMap[section]}
            </div>
        </div>
    );
};

export default DataPanel;