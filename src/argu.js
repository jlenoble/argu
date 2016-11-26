import isString from 'is-string';
import {error} from 'explanation';

const isArray = Array.isArray;

export class Args {
  constructor(args) {
    this.args = args;
  }
}

export function toArray (...args) {
  switch (args.length) {
    case 0:
      return [];

    case 1:
      const arg = args[0];
      if (isArray(arg)) {
        return [...arg];
      }
      return [arg];

    default:
      return args;
  }
}

export function toArrayOfArrays (...args) {
  switch (args.length) {
    case 0:
      return [[]];

    case 1:
      // Case [1, 2, 3] and case [[1], [2], [3]]
      const arg = args[0];
      if (isArray(arg)) {
        return arg.map(a => isArray(a) ? a : [a]);
      }
      return [[arg]];

    default:
      // Case 1, 2, 3 and case [1], [2], [2]
      return args.map(a => isArray(a) ? a : [a]);
  }
}

export function toArgs (...args) {
  return new Args(args);
}

export function toArrayOfArgs(...args) {
  return args.map(arg => new Args(toArray(arg)));
}

export function fromPropertyFactory (property) {
  if (!isString(property)) {
    error({
      message: `'property' is not a string`,
      explain: [
        'In function fromPropertyFactory, failed to create fromProperty',
        'because init argument is not a string.',
        ['It is:', property]
      ]
    });
  }

  return (function (property) {
    return function fromProperty(obj) {
      if (obj && obj[property]) {
        return obj[property];
      }
    };
  }(property));
}