import React from "react";

export interface Props {
  size: number;
  step?: number;
  onSizeChange?: (size: number) => void;
}

export const Grid = ({ size }: Props) => {
  return (
    <>
      <div
        className="Grid"
        style={
          {
            "--dot-space": `${size}px`,
          } as React.CSSProperties
        }
      />
    </>
  );
};
