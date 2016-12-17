import {expect} from 'chai';
import toArray from '../src/to-array';

describe('Testing Argu', function() {

  describe(`Testing 'toArray' helper`, function() {

    const array = [1, 2, 3];

    it(`Inputing ()`, function() {
      expect(toArray()).to.eql([]);
      expect(toArray()).not.to.equal([]);
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
        out: [1]
      },
      {
        title: '[[1]]',
        in: [[[1]]],
        out: [[1]]
      },
      {
        title: '[1, [2], [3, [4]]]',
        in: [[1, [2], [3, [4]]]],
        out: [1, [2], [3, [4]]]
      },
      {
        title: 'Array [1, 2, 3]',
        in: [array],
        out: array
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
    ].forEach(test => {

      it(`Inputing (${test.title})`, function() {
        expect(toArray(...test.in)).to.eql(test.out);
        expect(toArray(...test.in)).not.to.equal(test.out);
      });

    });

  });

});
