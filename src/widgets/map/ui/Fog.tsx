export const Fog = ({ step }: { step: number }) => {
  return (
    <div className="absolute left-0 right-0 top-0 z-20 bg-red-600/30" style={{ height: `calc(4rem * ${step})` }}></div>
  );
};
