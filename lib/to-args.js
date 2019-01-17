'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toArgs;

var _args = require('./args');

var _args2 = _interopRequireDefault(_args);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toArgs() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 1 && args[0] instanceof _args2.default) {
    return new _args2.default(args[0].args);
  }
  return new _args2.default(args);
}
module.exports = exports.default;