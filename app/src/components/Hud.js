import React from 'react';

const HudElement = ({ position }) => {
    const baseStyle = "fixed w-8 h-8 border-teal-300/40 pointer-events-none";
    const positions = {
        'top-left': 'top-4 left-4 border-t-2 border-l-2',
        'top-right': 'top-4 right-4 border-t-2 border-r-2',
        'bottom-left': 'bottom-4 left-4 border-b-2 border-l-2',
        'bottom-right': 'bottom-4 right-4 border-b-2 border-r-2',
    };
    
    return <div className={`${baseStyle} ${positions[position]}`}></div>;
};

export default HudElement;