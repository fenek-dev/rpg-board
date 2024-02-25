export const getColorFromChance = (chance: number) => {
  if (chance <= 1) return 'red';
  if (chance <= 10) return 'orange';
  if (chance <= 25) return 'yellow';
  if (chance <= 100) return 'green';
  return 'white';
};
