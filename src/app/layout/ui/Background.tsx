import React from 'react';

export const Background = () => {
  return (
    <svg className="fixed inset-0 -z-50" height="100%" width="100%">
      <pattern
        height="42"
        id="pattern-circles"
        patternContentUnits="userSpaceOnUse"
        patternUnits="userSpaceOnUse"
        width="42"
        x="0"
        y="0"
      >
        <circle cx="10" cy="10" fill="hsl(var(--muted))" id="pattern-circle" r="1.625"></circle>
      </pattern>

      <rect fill="url(#pattern-circles)" height="100%" id="rect" width="100%" x="0" y="0"></rect>
    </svg>
  );
};
