import slice from '../slice';

describe('slice function', () => {
  test('should create a slice of array from start up to, but not including, end', () => {
    const array = [1, 2, 3, 4];

    const result = slice(array, 2);

    expect(result).toEqual([3, 4]);
  });

  test('should handle negative start and end positions correctly', () => {
    const array = [1, 2, 3, 4];

    const result = slice(array, -3, -1);

    expect(result).toEqual([2, 3]);
  });

  test('should handle undefined and null arrays', () => {
    // Test with undefined
    const resultUndefined = slice(undefined, 1, 3);
    expect(resultUndefined).toEqual([]);

    // Test with null
    const resultNull = slice(null, 1, 3);
    expect(resultNull).toEqual([]);
  });



  test('should handle negative start position greater than array length', () => {
    const array = [1, 2, 3, 4];

    const result = slice(array, -10);

    expect(result).toEqual([1, 2, 3, 4]);
  });

  test('should handle negative start position exceeding array length', () => {
    const array = [1, 2, 3, 4];

    const result = slice(array, -5);

    expect(result).toEqual([1, 2, 3, 4]);
  });

});
