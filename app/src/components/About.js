import React from 'react';

const SectionTitle = ({ children }) => <h2 className='text-xl font-bold text-teal-300 mb-4 tracking-wider'>{children}</h2>;
const P = ({ children }) => <p className='mb-4 text-white font-light'>{children}</p>;

const About = () => {
  return (
    <div>
        <SectionTitle>// ABOUT_ME</SectionTitle>
        <P>My name is Greesh and I’m currently pursuing my Masters in Aeronautics and Astronautics at UW! From what started as watching aircrafts soar in the sky from my terrace, became a long-lasting love which fueled my desire to design them! The roar from the engines, resonate with the ambition to become an Aerospace Engineer and one day enter the industry to design aircrafts that more robust and efficient than ever before.</P>
    </div>
  )
}

export default About;