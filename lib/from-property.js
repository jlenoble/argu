'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromArgs = undefined;
exports.default = fromPropertyFactory;

var _isString = require('is-string');

var _isString2 = _interopRequireDefault(_isString);

var _explanation = require('explanation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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