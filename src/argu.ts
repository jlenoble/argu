import Args from "./args";
import toArray from "./to-array";
import toArrayOfArrays from "./to-array-of-arrays";

export default function args(...args) {
  return new Args(args);
}

export { toArray, toArrayOfArrays };
