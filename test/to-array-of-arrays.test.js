import {expect} from 'chai';
import {toArrayOfArrays} from '../src/argu';

describe('Testing Argu', function() {

  describe(`Testing 'toArrayOfArrays' helper`, function() {

    const array = [1, 2, 3];

    it(`Inputing ()`, function() {
      expect(toArrayOfArrays()).to.eql([[]]);
      expect(toArrayOfArrays()).not.to.equal([[]]);
    });

    [
      {
        title: '1',
        in: [1],
        out: [[1]]
      },
      {
        title: '[1]',
        in: [[1]],
        out: [[1]]
      },
      {
        title: '[[1]]',
        in: [[[1]]],
        out: [[1]]
      },
      {
        title: '[1, [2], [3, [4]]]',
        in: [[1, [2], [3, [4]]]],
        out: [[1], [2], [3, [4]]]
      },
      {
        title: 'Array [1, 2, 3]',
        in: [array],
        out: array.map(a => [a])
      },
      {
        title: '1, 2, 3',
        in: array,
        out: array.map(a => [a])
      },
      {
        title: '[1], [2], [3]',
        in: array.map(a => [a]),
        out: array.map(a => [a])
      },
    ].forEach(test => {

      it(`Inputing (${test.title})`, function() {
        expect(toArrayOfArrays(...test.in)).to.eql(test.out);
        expect(toArrayOfArrays(...test.in)).not.to.equal(test.out);
      });

    });

  });

});
