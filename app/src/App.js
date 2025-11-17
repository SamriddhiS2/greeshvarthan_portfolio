import React, { useState, useMemo } from 'react';
import ThreeDViewer from './components/ThreeDViewer';
import HudElement from './components/Hud';
import DataPanel from './components/DataPanel';
import ProjectsPage from './components/ProjectsPage';
import StaticPage from './components/StaticPage';
import GlobeTransition from './components/GlobeTransition';
import { AirplaneIcon } from './components/Icons';
import './App.css';

export default function App() {
  const [page, setPage] = useState('main');
  const [selectedSection, setSelectedSection] = useState(null);
  const [showLabels, setShowLabels] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePartClick = (sectionName) => {
    setSelectedSection(sectionName);
    setShowLabels(false);
  };

  const handleClosePanel = () => {
    setSelectedSection(null);
    setShowLabels(true);
  };

  const handleStaticPageClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setPage('static');
      setIsTransitioning(false);
    }, 2000); // 2-second transition
  };

  const handleBackToMainClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setPage('main');
      setIsTransitioning(false);
    }, 2000); // 2-second transition
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
        return <ProjectsPage setPage={handleBackToMainClick} />;
      
      case 'static':
        return <StaticPage setPage={handleBackToMainClick} />;
        
      case 'main':
      default:
        return (
          <>
            <header className="fixed top-0 left-0 w-full p-4 md:p-8 z-10 flex justify-between items-start pointer-events-none">
              {/* Left side: Title */}
              <div className="text-lg font-bold text-teal-300 tracking-widest">
                Greesh Varthan A. S. <span className="font-light text-white">| Aerospace Engineer</span>
              </div>
              
              {/* Right side: New Button */}
              <button 
                onClick={handleStaticPageClick}
                className="static-site-button text-xs md:text-sm flex items-center gap-2 px-3 py-2 border border-teal-300 text-teal-300 rounded-md hover:bg-teal-400/10 hover:shadow-lg transition-all pointer-events-auto"
                title="View static version of this site"
              >
                Static View
                <span className="airplane-icon">
                  <AirplaneIcon />
                </span>
              </button>
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
      {page === 'main' && memoizedHud}
      {renderPage()}
      {isTransitioning && <GlobeTransition />}
    </main>
  );
}
