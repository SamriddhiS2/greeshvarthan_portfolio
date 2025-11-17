import React from 'react';

export const SectionTitle = ({ children }) => <h2 className="text-2xl font-bold text-teal-300 mb-6 tracking-wider">{children}</h2>;
export const P = ({ children, ...props }) => <p className={`mb-4 text-slate-300 font-light ${props.className || ''}`}>{children}</p>;
export const A = ({ href, children, ...props }) => <a href={href} className="text-teal-300 hover:underline" {...props}>{children}</a>;
