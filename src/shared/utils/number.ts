export const abbreviateAmount = (num: number) =>
  Intl.NumberFormat('en-US', {
    maximumFractionDigits: 1,
    notation: 'compact',
  }).format(num);
