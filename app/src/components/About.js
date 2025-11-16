import React from 'react';
import headshot from '../assets/greesh_headshot_updated.png';

const SectionTitle = ({ children }) => <h2 className="text-xl font-bold text-teal-300 mb-4 tracking-wider">{children}</h2>;
const P = ({ children }) => <p className="mb-4 text-white font-light">{children}</p>;

const About = () => (
  <div>
    <SectionTitle>// ABOUT_ME</SectionTitle>
    <div className="flex flex-col sm:flex-row gap-6">
        <div className="sm:w-1/3 flex-shrink-0">
            <img 
                src={ headshot }
                alt="Headshot of Greesh Varthan"
                className="rounded-md border-2 border-slate-700 w-full h-auto"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/0a192f/FFFFFF?text=Image+Not+Found'; }}
            />
        </div>
        <div className="sm:w-2/3">
            <P>My name is Greesh and I’m currently pursuing my Masters in Aeronautics and Astronautics at UW! From what started as watching aircrafts soar in the sky from my terrace, became a long-lasting love which fueled my desire to design them! The roar from the engines, resonate with the ambition to become an Aerospace Engineer and one day enter the industry to design aircrafts that more robust and efficient than ever before.</P>
        </div>
    </div>
  </div>
);

export default About;