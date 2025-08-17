import React from 'react';
import { useState, useMemo } from 'react';
import ThreeDViewer from './components/ThreeDViewer';
import HudElement from './components/Hud';
import DataPanel from './components/DataPanel';
import ProjectsPage from './components/ProjectsPage';
import './App.css';

export default function App() {
  const [page, setPage] = useState('main');
  const [selectedSection, setSelectedSection] = useState(null);
  const [showLabels, setShowLabels] = useState(true);

  const handlePartClick = (sectionName) => {
    setSelectedSection(sectionName);
    setShowLabels(false);
  };

  const handleClosePanel = () => {
    setSelectedSection(null);
    setShowLabels(true);
  };

  const memoizedHud = useMemo(() => (
    <>
      <HudElement position="top-left" />
      <HudElement position="top-right" />
      <HudElement position="bottom-left" />
      <HudElement position="bottom-right" />
    </>
  ), []);

  const renderPage = () => {
    switch (page) {
      case 'projects':
        return <ProjectsPage setPage={setPage} />;
      case 'main':
      default:
        return (
          <>
            <header className="fixed top-0 left-0 w-full p-4 md:p-8 z-10 pointer-events-none">
              <div className="text-lg font-bold text-teal-300 tracking-widest">
                Greesh Varthan <span className="font-light text-white">Anusha Singaravelan</span>
              </div>
            </header>
            <div className="absolute top-0 left-0 w-full h-full">
              <ThreeDViewer onPartClick={handlePartClick} showLabels={showLabels} />
            </div>
            <div className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-10 text-center text-xs text-slate-400 bg-slate-900/50 p-2 rounded-md transition-opacity duration-1000 ${selectedSection ? 'opacity-0' : 'opacity-100'}`}>
              <p>Click labeled satellite components to explore.</p>
              <p>Click & Drag to rotate.</p>
            </div>
            <DataPanel section={selectedSection} onClose={handleClosePanel} setPage={setPage} />
          </>
        );
    }
  };

  return (
    <main className="relative w-screen h-screen bg-[#0a192f]">
      {memoizedHud}
      {renderPage()}
    </main>
  );
}
