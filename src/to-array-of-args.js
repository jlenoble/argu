import Args from './args';
import toArray from './to-array';

export default function toArrayOfArgs (...args) {
  return args.map(arg => {
    if (arg instanceof Args) {
      return new Args(arg.args);
    }
    return new Args(toArray(arg));
  });
}
