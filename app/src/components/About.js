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
            <P>My name is Greesh and I’m currently pursuing my Masters in Aeronautics and Astronautics at UW! From what started as watching aircrafts soar in the sky from my terrace, became a long-lasting love which fueled my desire to design them! The roar from the engines, resonate with the ambition to become an Aerospace Engineer and one day enter the industry to design aircrafts that more robust and efficient than ever before.</P>
        </div>
    </div>
  </div>
);

export default About;