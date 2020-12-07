import isString from "is-string";
import { error } from "explanation";

export default function fromPropertyFactory(property) {
  if (!isString(property)) {
    error({
      message: `'property' is not a string`,
      explain: [
        "In function fromPropertyFactory, failed to create fromProperty",
        "because init argument is not a string.",
        ["It is:", property],
      ],
    });
  }

  return (function (property) {
    return function (obj) {
      if (obj && obj[property]) {
        return obj[property];
      }
    };
  })(property);
}

export const fromArgs = fromPropertyFactory("args");
