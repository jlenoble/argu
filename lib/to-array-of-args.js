'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toArrayOfArgs;

var _args = require('./args');

var _args2 = _interopRequireDefault(_args);

var _toArray = require('./to-array');

var _toArray2 = _interopRequireDefault(_toArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toArrayOfArgs() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.map(function (arg) {
    if (arg instanceof _args2.default) {
      return new _args2.default(arg.args);
    }
    return new _args2.default((0, _toArray2.default)(arg));
  });
}
module.exports = exports['default'];