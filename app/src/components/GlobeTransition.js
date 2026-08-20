import React from 'react';
import { AirplaneIcon } from './Icons';

const GlobeTransition = () => (
  <div className="globe-transition">
    <div className="relative flex justify-center items-center">
      <div className="globe"></div>
      <div className="orbit-plane-3d">
        <AirplaneIcon className="w-full h-full" />
      </div>
    </div>
  </div>
);

export default GlobeTransition;
