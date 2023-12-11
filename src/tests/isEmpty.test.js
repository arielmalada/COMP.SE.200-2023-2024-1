import isEmpty from '../isEmpty';

describe('isEmpty function', () => {
  test('should return true for null and undefined values', () => {
    expect(isEmpty(null)).toEqual(true);
    expect(isEmpty(undefined)).toEqual(true);
  });

  test('should return true for true, false, and numeric values', () => {
    expect(isEmpty(true)).toEqual(true);
    expect(isEmpty(false)).toEqual(true);
    expect(isEmpty(0)).toEqual(true);
    expect(isEmpty(1)).toEqual(true);
  });

  test('should return false for non-empty arrays', () => {
    expect(isEmpty([1, 2, 3])).toEqual(false);
    expect(isEmpty(['a', 'b', 'c'])).toEqual(false);
  });

  test('should return false for non-empty strings', () => {
    expect(isEmpty('abc')).toEqual(false);
    expect(isEmpty('Hello, World!')).toEqual(false);
  });

  test('should return false for non-empty objects', () => {
    expect(isEmpty({ 'a': 1 })).toEqual(false);
    expect(isEmpty({ 'name': 'John', 'age': 30 })).toEqual(false);
  });

  test('should return true for empty arrays, strings, and objects', () => {
    expect(isEmpty([])).toEqual(true);
    expect(isEmpty('')).toEqual(true);
    expect(isEmpty({})).toEqual(true);
  });

  test('should return true for empty sets and maps', () => {
    expect(isEmpty(new Set())).toEqual(true);
    expect(isEmpty(new Map())).toEqual(true);
  });

  test('should return false for non-empty sets and maps', () => {
    const nonEmptySet = new Set([1, 2, 3]);
    const nonEmptyMap = new Map([['a', 1], ['b', 2]]);
    expect(isEmpty(nonEmptySet)).toEqual(false);
    expect(isEmpty(nonEmptyMap)).toEqual(false);
  });

  // Add more test cases as needed to cover different scenarios
});
