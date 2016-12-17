"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toArrayOfArrays;
var isArray = Array.isArray;

function toArrayOfArrays() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  switch (args.length) {
    case 0:
      return [[]];

    case 1:
      // Case [1, 2, 3] and case [[1], [2], [3]]
      var arg = args[0];
      if (isArray(arg)) {
        return arg.map(function (a) {
          return isArray(a) ? a : [a];
        });
      }
      return [[arg]];

    default:
      // Case 1, 2, 3 and case [1], [2], [2]
      return args.map(function (a) {
        return isArray(a) ? a : [a];
      });
  }
}
module.exports = exports["default"];