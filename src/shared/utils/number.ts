export const abbreviateAmount = (num: number) =>
  Intl.NumberFormat('en-US', {
    maximumFractionDigits: 1,
    notation: 'compact',
  }).format(num);

export const abbreviateWeight = (num: number) =>
  Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
    notation: 'compact',
    style: 'unit',
    unit: 'gram',
    unitDisplay: 'narrow',
  }).format(num);
