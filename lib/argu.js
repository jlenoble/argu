'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toArrayOfArrays = exports.toArray = undefined;
exports.default = args;

var _args = require('./args');

var _args2 = _interopRequireDefault(_args);

var _toArray = require('./to-array');

var _toArray2 = _interopRequireDefault(_toArray);

var _toArrayOfArrays = require('./to-array-of-arrays');

var _toArrayOfArrays2 = _interopRequireDefault(_toArrayOfArrays);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function args() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new _args2.default(args);
}

exports.toArray = _toArray2.default;
exports.toArrayOfArrays = _toArrayOfArrays2.default;