import React from 'react';
import { SectionTitle } from './common';

const Experience = () => {
  return (
    <div>
        <SectionTitle>EXPERIENCE</SectionTitle>
        <div className="mb-6">
            <h3 className="text-white font-semibold">Mechanical Engineering Intern | Elementrailer</h3>
            <p className="text-xs text-slate-300 mb-2">Oct 2025 - Present</p>
            <ul className="list-none pl-4 text-white">
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Design the trailer frame, suspension and battery cradle in SolidWorks/Onshape through manufacturing release (sheet metal, flat patterns, GD&amp;T, DFM); work directly with overseas suppliers on the chassis, battery pack and cable assemblies.</li>
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Derived the hitch load cases from vehicle statics in Python, then ran the scripted ANSYS analysis of the load-cell hitch (6 bodies, 28 pretensioned bolts, frictional contact, 12 load cases); preload and material studies set the coupler pin position and the fix for the M10 joint.</li>
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Traced non-physical stresses in the A-frame tongue model to a CAD joint that is not how the frame is welded; confirmed the real lap joint with the builder, rebuilt the model, and delivered the governing weld detail in one re-run.</li>
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Ran a 10 kN Instron compression test of both hitch load cells with the adapter plate (exercise cycles, then a load ladder to 3.78 kN), confirming the calibration scale factor to ~1%.</li>
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Keep the BOM and build documentation current, and take part in prototype assembly, fit-up and road tests.</li>
            </ul>
        </div>
        <div className="mb-6">
            <h3 className="text-white font-semibold">Graduate Researcher, MS Thesis | University of Washington</h3>
            <p className="text-xs text-slate-300 mb-2">Sep 2024 - Present</p>
            <ul className="list-none pl-4 text-white">
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Plan and run an ASTM D6415 curved-beam test campaign on discontinuous fiber composite L-coupons, loaded on an Instron to failure with synchronised camera imaging; wrote the test procedure and the camera/lens selection method.</li>
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Traced a DAQ load channel that read a railed input in most sessions, recovered the load record from the Instron files, and wrote a preload check into the revised procedure.</li>
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Wrote a Python 2D DIC solver validated against GOM Correlate to 0.15% strain, then a stereo (3D) DIC pipeline validated against MatchID to 0.007 mm in 3D position.</li>
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">X-ray CT scanned the molded composite parts and coupons (NSI X5000) to measure thickness and radius variation and find internal low-density layers before testing.</li>
            </ul>
        </div>
        <div className="mb-6">
            <h3 className="text-white font-semibold">Teaching Assistant | University of Washington</h3>
            <p className="text-xs text-slate-300 mb-2">Jan 2025 - Jun 2026</p>
            <ul className="list-none pl-4 text-white">
                <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Physics 122, AA301 and AA331 Aerospace Structures: four quarters across two departments, explaining mechanics to students meeting it for the first time.</li>
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
            <h3 className="text-white font-semibold">Research Intern | Indian Space Research Organization (ISRO)</h3>
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
