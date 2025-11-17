import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ArrowLeftIcon, MailIcon, LinkedInIcon, InstagramIcon, GithubIcon } from './Icons';
import { SectionTitle, P, A } from './common';
import { projectsData } from '../data/projectsData';
import { skillsData } from '../data/skillsData';
import headshot from '../assets/headshot.png';

const StaticPage = ({ setPage }) => {
  const [activeSection, setActiveSection] = useState('about');
  const scrollContainerRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sections = useMemo(() => [
    { id: 'about', title: 'About', ref: aboutRef },
    { id: 'experience', title: 'Experience', ref: experienceRef },
    { id: 'skills', title: 'Skills', ref: skillsRef },
    { id: 'projects', title: 'Projects', ref: projectsRef },
    { id: 'contact', title: 'Contact', ref: contactRef },
  ], []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPos = container.scrollTop;
      let currentSection = sections[0].id;
      const offset = 100;

      for (const section of sections) {
        if (section.ref.current && section.ref.current.offsetTop - offset <= scrollPos) {
          currentSection = section.id;
        }
      }
      setActiveSection(currentSection);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div 
      ref={scrollContainerRef} 
      className="static-page-scroll absolute top-0 left-0 w-full h-screen bg-[#0a192f] text-white overflow-y-auto"
    >
      <button 
        onClick={() => setPage('main')} 
        className="fixed top-4 left-4 z-50 flex items-center gap-2 text-xs md:text-sm px-3 py-2 border border-teal-300 text-teal-300 rounded-md hover:bg-teal-400/10 hover:shadow-lg transition-all"
      >
        <ArrowLeftIcon />
        Back to Satellite
      </button>

      <div className="relative md:flex">
        <aside className="hidden md:block md:w-1/3 lg:w-1/4 md:sticky md:top-0 md:h-screen md:py-24 md:px-6 lg:px-12 md:flex md:flex-col justify-between">
          <div className="pt-16">
            <h1 className="text-3xl lg:text-4xl font-bold text-teal-300 tracking-wider">
              Greesh Varthan A. S.
            </h1>
            <h2 className="text-xl lg:text-2xl font-light text-white mt-2">
              Aerospace Engineer
            </h2>
            <P className="mt-4 text-slate-400">
              Masters student in Aeronautics and Astronautics at UW
            </P>
            
            <nav className="mt-12">
              <ul className="flex flex-col gap-y-3">
                {sections.map(section => (
                  <li key={section.id}>
                    <a 
                      href={`#${section.id}`} 
                      onClick={(e) => {
                        e.preventDefault();
                        if (section.ref.current) {
                          scrollContainerRef.current.scrollTo({
                            top: section.ref.current.offsetTop - 80,
                            behavior: 'smooth'
                          });
                        }
                      }}
                      className={`font-mono text-slate-400 hover:text-teal-300 transition-all duration-200 ${activeSection === section.id ? 'nav-link-active' : ''}`}
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex gap-6 mt-8">
            <A href="mailto:greeshv03@gmail.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors transform hover:-translate-y-1"><MailIcon /></A>
            <A href="https://www.linkedin.com/in/greeshvarthan/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors transform hover:-translate-y-1"><LinkedInIcon /></A>
            <A href="https://github.com/greeshv03-ops" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors transform hover:-translate-y-1"><GithubIcon /></A>
            <A href="https://www.instagram.com/greeshvarthan/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors transform hover:-translate-y-1"><InstagramIcon /></A>
          </div>
        </aside>

        <main className="w-full md:w-2/3 lg:w-3/4 md:ml-auto pt-24 pb-24 px-4 md:px-6 lg:px-10">
          {/* Mobile Header */}
          <div className="md:hidden mb-8 pt-12">
             <h1 className="text-3xl font-bold text-teal-300 tracking-wider">
              Greesh Varthan A. S.
            </h1>
            <h2 className="text-xl font-light text-white mt-2">
              Aerospace Engineer
            </h2>
          </div>

          <section ref={aboutRef} id="about" className="mb-24 scroll-mt-24">
            <SectionTitle>ABOUT</SectionTitle>
            <div className="flex flex-col lg:flex-row lg:justify-evenly items-center gap-16">
              <div className="flex-shrink-0">
                <img 
                      src={ headshot }
                      alt="Headshot of Greesh Varthan"
                      className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-xl shadow-teal-400/40 border-4 border-slate-700"
                      onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/0a192f/FFFFFF?text=Image+Not+Found'; }}
                  />
              </div>
              <div className="w-full max-w-2xl">
                  <P>My name is Greesh Varthan and I’m currently pursuing my Masters in Aeronautics and Astronautics at UW! From what started as watching aircrafts soar in the sky from my terrace, became a long-lasting love which fueled my desire to design them! The roar from the engines, resonate with the ambition to become an Aerospace Engineer and one day enter the industry to design aircrafts that more robust and efficient than ever before.</P>
              </div>
            </div>
          </section>
          
          <section ref={experienceRef} id="experience" className="mb-24 scroll-mt-24">
            <SectionTitle>EXPERIENCE</SectionTitle>
              <div className="experience-timeline">
                <div className="timeline-item">
                  <div className="timeline-icon"></div>
                  <div className="timeline-content">
                    <h3 className="text-white font-semibold">Mechanical Design Engineer | Elementrailer</h3>
                    <p className="text-xs text-slate-300 mb-2">Oct 2025 - Present</p>
                    <ul className="list-none pl-4 text-slate-300">
                        <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Create and iterate SolidWorks/Onshape models for trailer structural sub-systems (frame, suspension, and battery cradle).</li>
                        <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Conduct ANSYS structural, fatigue, and thermal analyses for the 10k lb-GVWR chassis and mounting systems.</li>
                        <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Support materials research, focusing on lightweight and durable design for aerospace-grade trailer applications.</li>
                    </ul>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-icon"></div>
                  <div className="timeline-content">
                    <h3 className="text-white font-semibold">Structures Member | Washington Hyperloop</h3>
                    <p className="text-xs text-slate-300 mb-2">Sep 2024 - Dec 2024</p>
                    <ul className="list-none pl-4 text-slate-300">
                        <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Collaborated with Washington Hyperloop's structures team to design the structural framework for a vertical Tunnel Boring Machine (TBM).</li>
                        <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Applied principles of materials science and mechanics to select appropriate materials for the TBM structure, balancing strength and weight requirements.</li>
                        <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Utilized SolidWorks to create detailed 3D models of the TBM's structural components and conducted FEA simulations to determine stress and failure.</li>
                    </ul>
                  </div>
                </div>
      
                <div className="timeline-item">
                  <div className="timeline-icon"></div>
                  <div className="timeline-content">
                    <h3 className="text-white font-semibold">CFD Research Intern | Indian Space Research Organization (ISRO)</h3>
                    <p className="text-xs text-slate-300 mb-2">Jan 2024 - Apr 2024</p>
                    <ul className="list-none pl-4 text-slate-300">
                        <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Design and analysis of advanced propeller systems for autonomous space exploration bots, tailored for operation in low-gravity and vacuum environments.</li>
                        <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Presented design findings and recommendations of the propeller systems to senior engineers and contributed to iterative design improvements.</li>
                        <li className="relative before:content-['▹'] before:absolute before:left-[-1em] before:text-teal-300">Employed STAR-CCM+ to perform detailed CFD simulations, optimizing the aerodynamic performance and efficiency of propeller systems under provided conditions.</li>
                    </ul>
                  </div>
                </div>
              </div>
          </section>
          
          <section ref={skillsRef} id="skills" className="mb-24 scroll-mt-24">
            <div className="skill-tree">
              {/* Main Title Box */}
              <div className="bg-slate-900 border border-teal-300 text-teal-300 font-bold px-6 py-3 rounded-md shadow-lg">
                MY SKILLS
              </div>
              <div className="skill-trunk"></div>
              
              {/* Branches Container */}
              <div className="skill-branches">
                {/* Branch 1: Languages */}
                <div className="skill-branch">
                  <div className="skill-category-title">Languages</div>
                  <div className="skill-tags">
                    {skillsData.languages.map(skill => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
                
                {/* Branch 2: Software */}
                <div className="skill-branch">
                  <div className="skill-category-title">Software</div>
                  <div className="skill-tags">
                    {skillsData.software.map(skill => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
                
                {/* Branch 3: Concepts */}
                <div className="skill-branch">
                  <div className="skill-category-title">Concepts</div>
                  <div className="skill-tags">
                    {skillsData.concepts.map(skill => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section ref={projectsRef} id="projects" className="mb-24 scroll-mt-24">
            <SectionTitle>✦ PROJECTS</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectsData.map(p => (
                <div key={p.id} className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 flex flex-col transition-all hover:shadow-lg hover:border-teal-300/50">
                  <img 
                    src={p.image} 
                    alt={`Visualization for ${p.title}`}
                    className="rounded-md w-full h-48 md:h-64 object-cover mb-4 border border-slate-600"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/0a192f/FFFFFF?text=Image+Not+Found'; }}
                  />
                  <h3 className="text-xl font-bold text-teal-300 mb-2">{p.title}</h3>
                  <p className="text-white font-light flex-grow">{p.long}</p>
                </div>
              ))}
            </div>
          </section>

          <section ref={contactRef} id="contact" className="mb-24 scroll-mt-24">
            <SectionTitle>✦ CONTACT</SectionTitle>
            <P>I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out using the form below or connect with me on social media.</P>
            
            {submitted ? (
              <div className="form-success-message">
                <p className="font-semibold">Thank you!</p>
                <p>Thanks for contacting me! Your message has been received :)</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                  <input type="text" id="name" name="name" className="form-input" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                  <input type="email" id="email" name="email" className="form-input" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                  <textarea id="message" name="message" rows="5" className="form-textarea" required></textarea>
                </div>
                <div className='flex justify-center'>
                  <button type="submit" className="form-button" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </section>
          
          {/* Mobile Footer with Socials */}
          <div className="md:hidden flex justify-center gap-6 mt-16">
            <A href="mailto:greeshv03@gmail.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors transform hover:-translate-y-1"><MailIcon /></A>
            <A href="https://www.linkedin.com/in/greeshvarthan/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors transform hover:-translate-y-1"><LinkedInIcon /></A>
            <A href="https://github.com/greeshv03-ops" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors transform hover:-translate-y-1"><GithubIcon /></A>
            <A href="https://www.instagram.com/greeshvarthan/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors transform hover:-translate-y-1"><InstagramIcon /></A>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StaticPage;