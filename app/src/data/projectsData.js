import hypersonic from '../assets/hypersonic_missile.png';
import spl from '../assets/spl.png';
import boeing from '../assets/boeing747.png';
import cubesat from '../assets/cubesat.png';

export const projectsData = [
    { id: 'proj-1', title: 'Solid Propellant Engineer for Hypersonic Missile', short: 'Designed a solid rocket engine for air-air missile with a mean thrust of 0.4NM.', long: 'Worked on this project to design a solid rocket engine for an air launched hypersonic missile with a design mean thrust of 0.4MN with a "no smoke grade" propellant, to reduce missile visibility and so it vulnerability.', image: hypersonic },
    { id: 'proj-2', title: 'Deep Analysis of Sound Pressure Level (SPL) in Aircraft', short: 'Analysis of cabin sound level during different flight regimes (between A319 and Q400).', long: 'Conducted a comprehensive study and analysis of the Sound Pressuer Levels (SPL) between Airbus A319 and Bombardier Dash 8 Q400; proposed a universal approach to enhanve passenger comfort during different flight regimes.', image: spl },
    { id: 'proj-3', title: 'Investigation of Lateral and Longitudinal Stability of Boeing 747', short: 'Analysis of longitudinal and lateral stability of Boeing 747 during flight.', long: 'Produced a thorough report to assess the aircraft\'s performance, utilizing MATLAB to analyze flight curves. Evaluated the aircraft\'s longitudinal stability, lateral stability, and compliance with quality standards.', image: boeing },
    { id: 'proj-4', title: 'CubeSat 2021 - LiFi in Space', short: 'Conceptual idea of transmitting pre-processed data in CubeSat by means of light fidelity.', long: 'Presented the idea of LiFi communication inside a 1U satellite where preprogrammed data can be transferred between a transmitter and a receiver by means of Light fidelity.', image: cubesat },
];
