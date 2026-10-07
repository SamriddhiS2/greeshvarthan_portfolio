import React from 'react';
import headshot from '../assets/headshot.png';
import { SectionTitle, P } from './common';

const About = () => (
  <div>
    <SectionTitle>ABOUT ME</SectionTitle>
    <div className="flex flex-col items-center gap-8">
        <div className="flex-shrink-0">
            <img 
                src={ headshot }
                alt="Headshot of Greesh Varthan"
                className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-xl shadow-teal-400/40 border-4 border-slate-700"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/0a192f/FFFFFF?text=Image+Not+Found'; }}
            />
        </div>
        <div className="w-full max-w-2xl text-center">
            <P>I'm a mechanical engineer finishing my M.S. in Aeronautics &amp; Astronautics (Structures) at the University of Washington in December 2026. I like work that goes from CAD to hardware to data: at an electric-trailer startup I take frame, suspension and battery-cradle parts from design through drawings and supplier release to prototype assembly, and for my thesis I test composite parts to failure on an Instron, measure them with a two-camera strain system I wrote myself, and inspect them with X-ray CT. I'm looking for full-time design, test and structures roles starting January 2027.</P>
        </div>
    </div>
  </div>
);

export default About;