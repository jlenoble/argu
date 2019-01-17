"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toArray;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function toArray() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  switch (args.length) {
    case 0:
      return [];

    case 1:
      var arg = args[0];
      if (Array.isArray(arg)) {
        return [].concat(_toConsumableArray(arg));
      }
      return [arg];

    default:
      return args;
  }
}
module.exports = exports.default;