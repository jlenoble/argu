import {expect} from 'chai';
import {Args, toArgs, fromPropertyFactory} from '../src/argu';

describe('Testing Argu', function() {

  describe(`Testing 'toArgs' helper`, function() {

    const array = [1, 2, 3];
    const fromProperty = fromPropertyFactory('args');

    it(`Inputing ()`, function() {
      expect(fromProperty(toArgs())).to.eql([]);
      expect(fromProperty(toArgs())).not.to.equal([]);
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
    ].forEach(test => {

      it(`Inputing (${test.title})`, function() {
        expect(fromProperty(toArgs(...test.in))).to.eql(test.out);
        expect(fromProperty(toArgs(...test.in))).not.to.equal(test.out);
      });

    });

  });

});
