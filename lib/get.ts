export default function get(
  path: (string | number)[],
  obj: {},
  defaultValue?: any
) {
  if (obj === undefined) {
    return defaultValue;
  }
  const found = path.reduce(
    (curBranch, curPath) => (curBranch ? curBranch[curPath] : undefined),
    obj
  );
  if (defaultValue !== undefined) {
    return found !== undefined && found !== null ? found : defaultValue;
  }
  return found;
}
