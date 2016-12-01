'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromArgs = undefined;
exports.default = args;
exports.toArray = toArray;
exports.toArrayOfArrays = toArrayOfArrays;
exports.toArgs = toArgs;
exports.toArrayOfArgs = toArrayOfArgs;
exports.fromPropertyFactory = fromPropertyFactory;

var _isString = require('is-string');

var _isString2 = _interopRequireDefault(_isString);

var _explanation = require('explanation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isArray = Array.isArray;

var Args = function Args(args) {
  _classCallCheck(this, Args);

  this.args = args;
};

function args() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new Args(args);
}

function toArray() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  switch (args.length) {
    case 0:
      return [];

    case 1:
      var arg = args[0];
      if (isArray(arg)) {
        return [].concat(_toConsumableArray(arg));
      }
      return [arg];

    default:
      return args;
  }
}

function toArrayOfArrays() {
  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
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

function toArgs() {
  for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }

  if (args.length === 1 && args[0] instanceof Args) {
    return new Args(args[0].args);
  }
  return new Args(args);
}

function toArrayOfArgs() {
  for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }

  return args.map(function (arg) {
    if (arg instanceof Args) {
      return new Args(arg.args);
    }
    return new Args(toArray(arg));
  });
}

function fromPropertyFactory(property) {
  if (!(0, _isString2.default)(property)) {
    (0, _explanation.error)({
      message: '\'property\' is not a string',
      explain: ['In function fromPropertyFactory, failed to create fromProperty', 'because init argument is not a string.', ['It is:', property]]
    });
  }

  return function (property) {
    return function (obj) {
      if (obj && obj[property]) {
        return obj[property];
      }
    };
  }(property);
}

var fromArgs = exports.fromArgs = fromPropertyFactory('args');