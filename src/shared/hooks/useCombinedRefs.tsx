import { useCallback } from 'react';

import { CombineRefType, combineRefs } from '../utils';

export const useCombinedRefs = <Element extends HTMLElement>(refs: CombineRefType<Element>[]) => {
  return useCallback(
    (el: Element) => combineRefs(refs)(el),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refs
  );
};
