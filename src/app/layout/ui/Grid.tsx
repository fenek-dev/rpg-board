import React from 'react';

export interface Props {
  onSizeChange?: (size: number) => void;
  size: number;
  step?: number;
}

export const Grid = ({ size }: Props) => {
  return (
    <>
      <div
        className="Grid"
        style={
          {
            '--dot-space': `${size}px`,
          } as React.CSSProperties
        }
      />
    </>
  );
};
