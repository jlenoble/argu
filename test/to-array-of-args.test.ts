import { expect } from "chai";
import args from "../src/argu";
import toArrayOfArgs from "../src/to-array-of-args";
import { fromArgs } from "../src/from-property";

describe("Testing Argu", () => {
  describe(`Testing 'toArrayOfArgs' helper`, () => {
    const array = [1, 2, 3];

    it(`Inputing ()`, () => {
      expect(toArrayOfArgs()).to.eql([]);
      expect(toArrayOfArgs()).not.to.equal([]);
    });

    [
      {
        title: "1",
        in: [1],
        out: [[1]],
      },
      {
        title: "[1]",
        in: [[1]],
        out: [[1]],
      },
      {
        title: "[[1]]",
        in: [[[1]]],
        out: [[[1]]],
      },
      {
        title: "[1, [2], [3, [4]]]",
        in: [[1, [2], [3, [4]]]],
        out: [[1, [2], [3, [4]]]],
      },
      {
        title: "Array [1, 2, 3]",
        in: [array],
        out: [array],
      },
      {
        title: "1, 2, 3",
        in: array,
        out: array.map((a) => [a]),
      },
      {
        title: "[1], [2], [3]",
        in: array.map((a) => [a]),
        out: array.map((a) => [a]),
      },
      {
        title: "args(1)",
        in: [args(1)],
        out: [[1]],
      },
      {
        title: "args(1, 2, 3)",
        in: [args(1, 2, 3)],
        out: [array],
      },
      {
        title: "args(1, [2], 3)",
        in: [args(1, [2], 3)],
        out: [[1, [2], 3]],
      },
      {
        title: "args(1), args([2]), 3",
        in: [args(1), args([2]), 3],
        out: [[1], [[2]], [3]],
      },
    ].forEach((test) => {
      it(`Inputing (${test.title})`, () => {
        expect(toArrayOfArgs(...test.in).map((arg) => fromArgs(arg))).to.eql(
          test.out
        );
        expect(
          toArrayOfArgs(...test.in).map((arg) => fromArgs(arg))
        ).not.to.equal(test.out);
      });
    });
  });
});
