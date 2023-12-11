import castArray from '../castArray';

describe('castArray function', () => {
  test('should cast a non-array value to an array', () => {
    expect(castArray(1)).toEqual([1]);
    expect(castArray({ 'a': 1 })).toEqual([{ 'a': 1 }]);
    expect(castArray('abc')).toEqual(['abc']);
    expect(castArray(null)).toEqual([null]);
    expect(castArray(undefined)).toEqual([undefined]);
  });

  test('should return an empty array when called without arguments', () => {
    expect(castArray()).toEqual([]);
  });

  test('should return the input array if it is already an array', () => {
    const array = [1, 2, 3];
    expect(castArray(array)).toEqual(array);
  });

  test('should handle multiple arguments and cast them to an array', () => {
    expect(castArray(1, 2, 3)).toEqual([1, 2, 3]);
    expect(castArray({ 'a': 1 }, 'abc', null)).toEqual([{ 'a': 1 }, 'abc', null]);
  });

});