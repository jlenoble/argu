const isArray = Array.isArray;

export default function toArrayOfArrays (...args) {
  switch (args.length) {
  case 0:
    return [[]];

  case 1:
    // Case [1, 2, 3] and case [[1], [2], [3]]
    const arg = args[0];
    if (isArray(arg)) {
      if (arg.length === 0) {
        return [[]];
      }
      return arg.map(a => isArray(a) ? a : [a]);
    }
    return [[arg]];

  default:
    // Case 1, 2, 3 and case [1], [2], [2]
    return args.map(a => isArray(a) ? a : [a]);
  }
}
