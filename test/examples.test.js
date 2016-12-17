import {expect} from 'chai';
import toArray from '../src/to-array';
import toArrayOfArrays from '../src/to-array-of-arrays';

describe('Testing README examples', function() {

  it('testing toArray example', function() {
    expect(toArray()).to.eql([]);
    expect(toArray(1)).to.eql([1]);
    expect(toArray([1])).to.eql([1]);
    expect(toArray(1, 2)).to.eql([1, 2]);
    expect(toArray(1, [2])).to.eql([1, [2]]);
    expect(toArray([1], 2)).to.eql([[1], 2]);
    expect(toArray([1, 2])).to.eql([1, 2]);
  });

  it('testing toArrayOfArrays example', function() {
    expect(toArrayOfArrays()).to.eql([[]]);
    expect(toArrayOfArrays(1)).to.eql([[1]]);
    expect(toArrayOfArrays([1])).to.eql([[1]]);
    expect(toArrayOfArrays(1, 2)).to.eql([[1], [2]]);
    expect(toArrayOfArrays(1, [2])).to.eql([[1], [2]]);
    expect(toArrayOfArrays([1], 2)).to.eql([[1], [2]]);
    expect(toArrayOfArrays([1, 2])).to.eql([[1], [2]]);
    expect(toArrayOfArrays([1], [2])).to.eql([[1], [2]]);
    expect(toArrayOfArrays([[1], 2])).to.eql([[1], [2]]);
  });

});
