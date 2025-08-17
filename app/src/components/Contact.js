import React from 'react';
import { LinkedInIcon, InstagramIcon, MailIcon } from './Icons';

const SectionTitle = ({ children }) => <h2 className="text-xl font-bold text-teal-300 mb-4 tracking-wider">{children}</h2>;
const P = ({ children }) => <p className="mb-4 text-white font-light">{children}</p>;
const A = ({ href, children }) => <a href={href} className="text-teal-300 hover:underline">{children}</a>;

const Contact = () => {
    <div>
        <SectionTitle>// CONTACT_CHANNEL</SectionTitle>
        <P>I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out.</P>
        <A href="mailto:greeshv03@example.com" className="inline-block bg-teal-400/10 text-teal-300 px-4 py-2 rounded-md hover:bg-teal-400/20 transition-colors">INITIATE_EMAIL_TRANSMISSION</A>
        
        <div className="mt-10 flex gap-6">
            <a href="mailto:greeshv03@example.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors transform hover:-translate-y-1"><MailIcon /></a>
            <a href="https://www.linkedin.com/in/greeshvarthan/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors transform hover:-translate-y-1"><LinkedInIcon /></a>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors transform hover:-translate-y-1"><InstagramIcon /></a>
        </div>
    </div>
}

export default Contact;