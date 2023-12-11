import countBy from '../countBy';

describe('countBy function', () => {
  it('should count the occurrences of each key generated by the iteratee', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false },
    ];

    const result = countBy(users, value => value.active);

    expect(result).toEqual({ 'true': 2, 'false': 1 });
  });

  it('should handle an empty array', () => {
    const result = countBy([], value => value);

    expect(result).toEqual({});
  });

  it('should handle undefined and null collections', () => {
    // Test with undefined
    const resultUndefined = countBy(undefined, value => value);
    expect(resultUndefined).toEqual({});

    // Test with null
    const resultNull = countBy(null, value => value);
    expect(resultNull).toEqual({});
  });

  it('should handle non-boolean values returned by the iteratee', () => {
    const array = [1, 2, 3, 4, 5];

    const result = countBy(array, value => value % 2 === 0);

    expect(result).toEqual({ 'true': 2, 'false': 3 });
  });

  it('should handle complex objects and custom iteratee functions', () => {
    const objects = [
      { 'a': { 'b': 2 } },
      { 'a': { 'b': 1 } },
      { 'a': { 'b': 2 } },
    ];

    const result = countBy(objects, obj => obj.a.b);

    expect(result).toEqual({ '1': 1, '2': 2 });
  });

});
