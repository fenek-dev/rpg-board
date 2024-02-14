interface Props {
  size: number;
}

export const Grid = ({ size }: Props) => {
  return (
    <svg className="absolute left-0 top-0 z-0" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern height={size} id="smallGrid" patternUnits="userSpaceOnUse" width={size}>
          <path d={`M ${size} 0 L 0 0 0 ${size}`} fill="none" stroke="#333" strokeWidth="0.75" />
        </pattern>
      </defs>
      <rect fill="url(#smallGrid)" height="100%" width="100%" />
    </svg>
  );
};
