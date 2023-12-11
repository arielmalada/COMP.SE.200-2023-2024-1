import filter from '../filter';

describe('filter function', () => {
  it('should filter elements based on the provided predicate', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': false },
    ];

    const result = filter(users, ({ active }) => active);

    expect(result).toEqual([{ 'user': 'barney', 'active': true }]);
  });

  it('should handle an empty array', () => {
    const predicate = () => true;
    const inputArray = [];

    const result = filter(inputArray, predicate);

    expect(result).toEqual([]);
  });

  it('should handle undefined and null arrays', () => {
    const predicate = () => true;

    // Test with undefined
    const resultUndefined = filter(undefined, predicate);
    expect(resultUndefined).toEqual([]);

    // Test with null
    const resultNull = filter(null, predicate);
    expect(resultNull).toEqual([]);
  });

  it('should pass the correct arguments to the predicate function', () => {
    const mockPredicate = jest.fn((value, index, array) => value.active);
    const inputArray = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': false },
    ];

    const result = filter(inputArray, mockPredicate);

    expect(mockPredicate).toHaveBeenCalledTimes(inputArray.length);
    expect(mockPredicate).toHaveBeenCalledWith(inputArray[0], 0, inputArray);
    expect(mockPredicate).toHaveBeenCalledWith(inputArray[1], 1, inputArray);

  });

});
