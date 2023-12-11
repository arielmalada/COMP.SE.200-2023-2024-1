import reduce from '../reduce';

describe('reduce function', () => {
  test('should reduce an array correctly', () => {
    const sumReducer = (accumulator, value) => accumulator + value;
    const array = [1, 2, 3, 4, 5];

    const result = reduce(array, sumReducer, 0);

    expect(result).toBe(15);
  });

  test('should reduce an object correctly', () => {
    const keyConcatenator = (result, value, key) => {
      (result[value] || (result[value] = [])).push(key);
      return result;
    };

    const object = { 'a': 1, 'b': 2, 'c': 1 };

    const result = reduce(object, keyConcatenator, {});

    expect(result).toEqual({ '1': ['a', 'c'], '2': ['b'] });
  });

  test('should use the first element of the array as initial value if accumulator is not given', () => {
    const sumReducer = (accumulator, value) => accumulator + value;
    const array = [1, 2, 3, 4, 5];

    const result = reduce(array, sumReducer);

    expect(result).toBe(15);
  });

  test('should work with an empty array', () => {
    const sumReducer = (accumulator, value) => accumulator + value;
    const array = [];

    const result = reduce(array, sumReducer, 0);

    expect(result).toBe(0);
  });

});