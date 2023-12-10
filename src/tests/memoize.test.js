import memoize from '../memoize';

describe('memoize', () => {
  test('memoizes the result of a function', () => {
    const add = jest.fn((a, b) => a + b);
    const memoizedAdd = memoize(add);

    expect(memoizedAdd(1, 2)).toBe(3);
    expect(add).toHaveBeenCalledTimes(1); // Function should be called only once
    expect(memoizedAdd(1, 2)).toBe(3);
    expect(add).toHaveBeenCalledTimes(1); // Result should be memoized

    expect(memoizedAdd(3, 4)).toBe(7);
    expect(add).toHaveBeenCalledTimes(2); // Function should be called again for new arguments
    expect(memoizedAdd(3, 4)).toBe(7);
    expect(add).toHaveBeenCalledTimes(2); // Result should be memoized
  });

  test('uses resolver function to determine cache key', () => {
    const multiply = jest.fn((a, b) => a * b);
    const resolver = jest.fn((a, b) => `${a}-${b}`);
    const memoizedMultiply = memoize(multiply, resolver);

    expect(memoizedMultiply(2, 3)).toBe(6);
    expect(multiply).toHaveBeenCalledTimes(1); // Function should be called only once
    expect(resolver).toHaveBeenCalledTimes(1); // Resolver should be called only once

    expect(memoizedMultiply(2, 3)).toBe(6);
    expect(multiply).toHaveBeenCalledTimes(1); // Result should be memoized
    expect(resolver).toHaveBeenCalledTimes(2);  // Resolver should be called again for new arguments

    expect(memoizedMultiply(4, 5)).toBe(20);
    expect(multiply).toHaveBeenCalledTimes(2); // Function should be called again for new arguments
    expect(resolver).toHaveBeenCalledTimes(3); // Resolver should be called again for new arguments
  });

  test('throws an error if the input is not a function', () => {
    expect(() => memoize(123)).toThrow(TypeError);
    expect(() => memoize('abc')).toThrow(TypeError);
    expect(() => memoize(null)).toThrow(TypeError);
    expect(() => memoize(undefined)).toThrow(TypeError);
    expect(() => memoize({})).toThrow(TypeError);
    expect(() => memoize([])).toThrow(TypeError);
  });

});