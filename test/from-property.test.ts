import {expect} from 'chai';
import fromPropertyFactory from '../src/from-property';

describe('Testing Argu', function() {

  describe(`Testing 'fromPropertyFactory' helper`, function() {

    const array = [1, 2, 3];

    class Num {
      constructor(num) {this.setNum(num);}
      getNum() {return this.num;}
      setNum(num) {this.num = num;}
    }

    const fromProperty = fromPropertyFactory('num');

    it(`Inputing ()`, function() {
      expect(fromProperty()).to.be.undefined;
    });

    [
      {
        title: '1',
        in: [1]
      },
      {
        title: '[1]',
        in: [[1]]
      },
      {
        title: '[[1]]',
        in: [[[1]]]
      },
      {
        title: '[1, [2], [3, [4]]]',
        in: [[1, [2], [3, [4]]]]
      },
      {
        title: 'Array [1, 2, 3]',
        in: [array]
      },
      {
        title: '1, 2, 3',
        in: array
      },
      {
        title: '[1], [2], [3]',
        in: array.map(a => [a])
      }
    ].forEach(test => {

      it(`Inputing (${test.title})`, function() {
        expect(fromProperty(...test.in)).to.be.undefined;
      });

    });

    [
      {
        title: 'new Num(1)',
        in: [new Num(1)],
        out: 1
      },
      {
        title: `new Num('rubbish')`,
        in: [new Num('rubbish')],
        out: 'rubbish'
      },
      {
        title: `{num: 12}`,
        in: [{num: 12}],
        out: 12
      },
      {
        title: `{num: 12, name: 'foo'}`,
        in: [{num: 12}],
        out: 12
      }
    ].forEach(test => {

      it(`Inputing (${test.title})`, function() {
        expect(fromProperty(...test.in)).to.equal(test.out);
      });

    });

    it(`Inputing ({name: 'foo'})`, function() {
      expect(fromProperty({name: 'foo'})).to.be.undefined;
    });

  });

});
