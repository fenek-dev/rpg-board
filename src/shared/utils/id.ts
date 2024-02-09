export const composeIds = (...ids: (string | undefined)[]) => ids.filter(Boolean).join('/');

export const parseComposedId = (id: string) => id.split('/');

export const getPathFromComposedId = (id: string) => {
  const ids = parseComposedId(id);
  const path = `[${ids[0]}]`;
  return ids.slice(1).reduce((acc, curr) => `${acc}.contain[${curr}]`, path);
};
