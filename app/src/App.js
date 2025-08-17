import React from 'react';
import ThreeDViewer from './components/ThreeDViewer';
import HudElement from './components/Hud';
import './App.css';

export default function App() {
  return (
    <main className='relative w-screen h-screen bg-[#0a192f]'>
      <HudElement position="top-left" />
      <HudElement position="top-right" />
      <HudElement position="bototm-left" />
      <HudElement position="bottom-right" />
      <header className='fixed top-0 left-0 w-full p-4 md:p-8 z-10 pointer-events-none'>
        <div className='text-lf font-bold text-teal-300 tracking-widest'>
          GREESH VARTHAN <span className='font-light text-white'>ANUSHA SINGARAVELAN</span>
        </div>
      </header>
      <div className='absolute top-0 left-0 w-full h-full'>
        <ThreeDViewer />
      </div>
    </main>
  );
}
