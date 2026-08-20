import React from 'react';
import { AirplaneIcon } from './Icons';

const GlobeTransition = () => (
  <div className="globe-transition">
    <div className="relative flex justify-center items-center">
      <div className="globe"></div>
      <div className="orbit-path">
        <div className="orbit-plane">
          <AirplaneIcon className="w-full h-full" />
        </div>
      </div>
    </div>
  </div>
);

export default GlobeTransition;
