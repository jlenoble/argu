import {expect} from 'chai';
import args from '../src/argu';
import toArgs from '../src/to-args';
import {fromArgs} from '../src/from-property';

describe('Testing Argu', function() {

  describe(`Testing 'toArgs' helper`, function() {

    const array = [1, 2, 3];

    it(`Inputing ()`, function() {
      expect(fromArgs(toArgs())).to.eql([]);
      expect(fromArgs(toArgs())).not.to.equal([]);
    });

    [
      {
        title: '1',
        in: [1],
        out: [1]
      },
      {
        title: '[1]',
        in: [[1]],
        out: [[1]]
      },
      {
        title: '[[1]]',
        in: [[[1]]],
        out: [[[1]]]
      },
      {
        title: '[1, [2], [3, [4]]]',
        in: [[1, [2], [3, [4]]]],
        out: [[1, [2], [3, [4]]]]
      },
      {
        title: 'Array [1, 2, 3]',
        in: [array],
        out: [array]
      },
      {
        title: '1, 2, 3',
        in: array,
        out: array
      },
      {
        title: '[1], [2], [3]',
        in: array.map(a => [a]),
        out: array.map(a => [a])
      },
      {
        title: 'args(1)',
        in: [args(1)],
        out: [1]
      },
      {
        title: 'args(1, 2, 3)',
        in: [args(1, 2, 3)],
        out: array
      },
      {
        title: 'args(1, [2], 3)',
        in: [args(1, [2], 3)],
        out: [1, [2], 3]
      },
      { // The following case is edgy, toArgs expects one set of args only
        title: 'args(1), args([2]), 3',
        in: [args(1), args([2]), 3],
        out: [{args: [1]}, {args: [[2]]}, 3]
      },
    ].forEach(test => {

      it(`Inputing (${test.title})`, function() {
        expect(fromArgs(toArgs(...test.in))).to.eql(test.out);
        expect(fromArgs(toArgs(...test.in))).not.to.equal(test.out);
      });

    });

  });

});
