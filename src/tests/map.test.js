import map from '../map';

describe('map function', () => {
  it('should map array elements using the provided iteratee', () => {
    const square = n => n * n;
    const inputArray = [4, 8];
    const expectedResult = [16, 64];

    const result = map(inputArray, square);

    expect(result).toEqual(expectedResult);
  });

  it('should handle an empty array', () => {
    const square = n => n * n;
    const inputArray = [];

    const result = map(inputArray, square);

    expect(result).toEqual([]);
  });

  it('should handle undefined and null arrays', () => {
    const square = n => n * n;

    // Test with undefined
    const resultUndefined = map(undefined, square);
    expect(resultUndefined).toEqual([]);

    // Test with null
    const resultNull = map(null, square);
    expect(resultNull).toEqual([]);
  });

  it('should pass the correct arguments to the iteratee function', () => {
    const mockIteratee = jest.fn((value, index, array) => value + index);
    const inputArray = [1, 2, 3];

    const result = map(inputArray, mockIteratee);

    expect(mockIteratee).toHaveBeenCalledTimes(inputArray.length);
    expect(mockIteratee).toHaveBeenCalledWith(1, 0, inputArray);
    expect(mockIteratee).toHaveBeenCalledWith(2, 1, inputArray);
    expect(mockIteratee).toHaveBeenCalledWith(3, 2, inputArray);

  });

});
