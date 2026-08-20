import React from 'react';
import { ArrowLeftIcon } from './Icons';
import { projectsData } from '../data/projectsData';

const ProjectsPage = ({ setPage }) => (
    <div className="absolute top-0 left-0 w-full h-full bg-[#0a192f] starfield-bg overflow-y-auto">
        <header className="sticky top-0 z-50 flex justify-between items-center bg-[#0a192f]/90 backdrop-blur-md px-4 py-4 md:px-8 md:py-6 border-b border-slate-800/50">
            <h1 className="text-2xl font-bold text-teal-300 tracking-widest">PROJECT_ARCHIVE</h1>
            <button onClick={() => setPage('main')} className="flex items-center gap-2 text-xs md:text-sm px-3 py-2 border border-teal-300 text-teal-300 rounded-md hover:bg-teal-400/10 hover:shadow-lg transition-all">
                <ArrowLeftIcon />
                Back to Satellite
            </button>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 md:px-8 py-12 pb-20">
            {projectsData.map(p => (
                <div key={p.id} className="hud-card bg-slate-900/50 border border-slate-700 rounded-lg p-6 flex flex-col hover:border-teal-300/50">
                    <img
                        src={p.image}
                        alt={`Visualization for ${p.title}`}
                        className="rounded-md w-full h-48 object-fit mb-4 border border-slate-600"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/0a192f/FFFFFF?text=Image+Not+Found'; }}
                    />
                    <h2 className="text-xl font-bold text-teal-300 mb-2">{p.title}</h2>
                    <p className="text-white font-light flex-grow">{p.long}</p>
                    {p.url && (
                        <a href={p.url} target="_blank" rel="noopener noreferrer" className="visit-link">VISIT ↗</a>
                    )}
                </div>
            ))}
        </div>
    </div>
);

export default ProjectsPage;