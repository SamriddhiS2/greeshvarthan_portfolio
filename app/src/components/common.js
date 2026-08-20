import React from 'react';

// module = satellite part designation from the 3D view (MAIN_BUS, COMMS_DISH, ...)
export const SectionTitle = ({ children, module }) => (
  <div className="mb-6">
    {module && <span className="module-eyebrow">MODULE // {module}</span>}
    <h2 className="text-2xl font-bold text-teal-300 tracking-wider">{children}</h2>
  </div>
);
export const P = ({ children, ...props }) => <p className={`mb-4 text-slate-300 font-light ${props.className || ''}`}>{children}</p>;
export const A = ({ href, children, ...props }) => <a href={href} className="text-teal-300 hover:underline" {...props}>{children}</a>;
