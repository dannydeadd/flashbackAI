import React from 'react';

const CustomButton = () => (
  <a href="/create/twin" className="button button-yellow" style={{ opacity: 1, transform: 'scale(1)' }}>
    <span className="button-bg">
      <span className="button-bg-layers">
        <span className="button-bg-layer button-bg-layer-1 -purple"></span>
        <span className="button-bg-layer button-bg-layer-2 -turquoise"></span>
        <span className="button-bg-layer button-bg-layer-3 -yellow"></span>
      </span>
    </span>
    <span className="button-inner">
      <span className="button-inner-static">Discover what we do</span>
      <span className="button-inner-hover">Discover what we do</span>
    </span>
  </a>
);

export default CustomButton;
