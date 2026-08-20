import React from 'react';
import { SectionTitle } from './common';

const Experience = () => {
  return (
    <div>
        <SectionTitle>EXPERIENCE</SectionTitle>
        <div className="mb-6">
            <h3 className="text-white font-semibold">Mechanical Design Engineer | Elementrailer</h3>
            <p className="text-xs text-slate-300 mb-2">Oct 2025 - Present</p>
            <ul className="list-none pl-4 text-white">
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Design the frame, suspension, and battery enclosure for a 10,000 lb GVWR electric trailer, from concept through drawings and BOMs released to manufacturing and suppliers.</li>
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Root-caused a recurring assembly failure to unmanaged tolerance chains on legacy drawings; fixed the drawings and release process, cutting fit and rework issues about 25%.</li>
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Conduct ANSYS structural, fatigue, and thermal analyses for the chassis and mounting systems, raising minimum safety factor from 1.8 to 2.3.</li>
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Coordinate directly with vendors in China on chassis, battery, and cable components.</li>
            </ul>
        </div>
        <div className="mb-6">
            <h3 className="text-white font-semibold">Graduate Researcher, MS Thesis | University of Washington</h3>
            <p className="text-xs text-slate-300 mb-2">Sep 2024 - Present</p>
            <ul className="list-none pl-4 text-white">
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Run an ASTM D6415 curved-beam test campaign on discontinuous fiber composites spanning bend radius, thickness, and platelet geometry.</li>
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Authored the DIC camera-calibration work instructions and wrote an independent Python DIC solver as a cross-check on GOM Correlate.</li>
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Reduce failure data to B-basis design allowable estimates, identifying failure modes by microscopy and verifying fiber orientation with micro-CT.</li>
            </ul>
        </div>
        <div className="mb-6">
            <h3 className="text-white font-semibold">Structures Member | Washington Hyperloop</h3>
            <p className="text-xs text-slate-300 mb-2">Sep 2024 - Dec 2024</p>
            <ul className="list-none pl-4 text-white">
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Collaborated with Washington Hyperloop's structures team to design the structural framework for a vertical Tunnel Boring Machine (TBM).</li>
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Applied principles of materials science and mechanics to select appropriate materials for the TBM structure, balancing strength and weight requirements.</li>
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Utilized SolidWorks to create detailed 3D models of the TBM's structural components and conducted FEA simulations to determine stress and failure.</li>
            </ul>
        </div>
        <div className="mb-6">
            <h3 className="text-white font-semibold">CFD Research Intern | Indian Space Research Organization (ISRO)</h3>
            <p className="text-xs text-slate-300 mb-2">Jan 2024 - Apr 2024</p>
            <ul className="list-none pl-4 text-white">
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Design and analysis of advanced propeller systems for autonomous space exploration bots, tailored for operation in low-gravity and vacuum environments.</li>
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Employed STAR-CCM+ to perform detailed CFD simulations, optimizing the aerodynamic performance and efficiency of propeller systems under provided conditions.</li>
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Worked on-site at a manufacturing vendor facility to fast-track design and development of hardware for the Gaganyaan mission, India's first human spaceflight program.</li>
            </ul>
        </div>
        <div className="mb-6">
            <h3 className="text-white font-semibold">Software Development Intern | Single Point Solutions Pvt. Ltd.</h3>
            <p className="text-xs text-slate-300 mb-2">Jun 2023 - Jul 2023 · Hyderabad, India</p>
            <ul className="list-none pl-4 text-white">
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Using Python, automated routine data processing tasks and performed small-scale data analysis with NumPy and Pandas.</li>
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Contributed to internal Python tools alongside the development team, working within their code review and delivery process.</li>
            </ul>
        </div>
    </div>
  )
}

export default Experience;
