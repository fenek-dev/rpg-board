import React from 'react';

export type CombineRefType<El> = ((el: El) => void) | React.ForwardedRef<El> | React.MutableRefObject<El>;

export const combineRefs =
  <Element>(refs: CombineRefType<Element>[]) =>
  (el: Element) => {
    refs.forEach((ref) => {
      if (ref) {
        if (typeof ref === 'function') {
          ref(el);
        } else {
          ref.current = el;
        }
      }
    });
  };
