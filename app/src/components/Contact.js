import React from 'react';
import { SectionTitle, P, A } from './common';
import { LinkedInIcon, InstagramIcon, MailIcon, GithubIcon, AirplaneIcon } from './Icons';

const Contact = () => {
    return (
        <div>
          <SectionTitle>CONTACT</SectionTitle>
          <P>I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out.</P>
          <A href="mailto:greeshv03@gmail.com" className="inline-block bg-teal-400/10 text-teal-300 px-4 py-2 rounded-md hover:bg-teal-400/20 transition-colors">INITIATE_EMAIL_TRANSMISSION <span className="airplane-icon"><AirplaneIcon /></span></A>
            
          <div className="mt-12 flex gap-6 justify-center">
              <A href="mailto:greeshv03@gmail.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors transform hover:-translate-y-1"><MailIcon /></A>
              <A href="https://www.linkedin.com/in/greeshvarthan/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors transform hover:-translate-y-1"><LinkedInIcon /></A>
              <A href="https://github.com/greeshv03-ops" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors transform hover:-translate-y-1"><GithubIcon /></A>
              <A href="https://www.instagram.com/greeshvarthan/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors transform hover:-translate-y-1"><InstagramIcon /></A>
          </div>
        </div>
    )
}

export default Contact;