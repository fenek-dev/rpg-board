import React from 'react';

export interface Props {
  size: number;
}

export const Grid = ({ size }: Props) => {
  return (
    <svg
      className="absolute inset-0 -z-10"
      height={`calc(100% + ${size / 5}px)`}
      style={{
        transform: `translate(-${size / 10}px, -${size / 10}px)`,
      }}
      width={`calc(100% + ${size / 5}px)`}
    >
      <pattern
        height={size}
        id="pattern-circles"
        patternContentUnits="userSpaceOnUse"
        patternUnits="userSpaceOnUse"
        width={size}
        x="0"
        y="0"
      >
        <circle cx="2" cy="2" fill="#444" id="pattern-circle" r="1.625"></circle>
      </pattern>

      <rect fill="url(#pattern-circles)" height="100%" id="rect" width="100%" x="0" y="0"></rect>
    </svg>
  );
};
