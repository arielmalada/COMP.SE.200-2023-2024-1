import isLength from '../isLength';

describe('isLength function', () => {
  test('should return true for a valid array-like length', () => {
    expect(isLength(3)).toEqual(true);
    expect(isLength(0)).toEqual(true);
    expect(isLength(9007199254740991)).toEqual(true);
  });

  test('should return false for invalid array-like lengths', () => {
    expect(isLength(Number.MIN_VALUE)).toEqual(false);
    expect(isLength(Infinity)).toEqual(false);
    expect(isLength(-1)).toEqual(false);
    expect(isLength(3.5)).toEqual(false);
    expect(isLength('3')).toEqual(false);
    expect(isLength('abc')).toEqual(false);
    expect(isLength(null)).toEqual(false);
    expect(isLength(undefined)).toEqual(false);
    expect(isLength({ length: 5 })).toEqual(false);
  });

});