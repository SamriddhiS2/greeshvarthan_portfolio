import React from 'react';
import { ArrowLeftIcon } from './Icons';
import { projectsData } from './Projects';

const ProjectsPage = ({ setPage }) => (
    <div className="absolute top-0 left-0 w-full h-full bg-[#0a192f] p-4 md:p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-teal-300 tracking-widest">PROJECT_ARCHIVE</h1>
            <button onClick={() => setPage('main')} className="flex items-center gap-2 text-teal-300 hover:underline">
                <ArrowLeftIcon />
                Back to Satellite
            </button>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projectsData.map(p => (
                <div key={p.id} className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 flex flex-col">
                    <img 
                        src={p.image} 
                        alt={`Visualization for ${p.title}`}
                        className="rounded-md w-full h-48 object-cover mb-4 border border-slate-600"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/0a192f/FFFFFF?text=Image+Not+Found'; }}
                    />
                    <h2 className="text-xl font-bold text-teal-300 mb-2">{p.title}</h2>
                    <p className="text-white font-light flex-grow">{p.long}</p>
                </div>
            ))}
        </div>
    </div>
);

export default ProjectsPage;