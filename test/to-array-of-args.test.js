import {expect} from 'chai';
import {Args, toArrayOfArgs, fromPropertyFactory} from '../src/argu';

describe('Testing Argu', function() {

  describe(`Testing 'toArrayOfArgs' helper`, function() {

    const array = [1, 2, 3];
    const fromProperty = fromPropertyFactory('args');

    it(`Inputing ()`, function() {
      expect(toArrayOfArgs()).to.eql([]);
      expect(toArrayOfArgs()).not.to.equal([]);
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
        out: array.map(a => [a])
      },
      {
        title: '[1], [2], [3]',
        in: array.map(a => [a]),
        out: array.map(a => [a])
      },
    ].forEach(test => {

      it(`Inputing (${test.title})`, function() {
        expect(toArrayOfArgs(...test.in).map(arg => fromProperty(arg)))
          .to.eql(test.out);
        expect(toArrayOfArgs(...test.in).map(arg => fromProperty(arg)))
          .not.to.equal(test.out);
      });

    });

  });

});
