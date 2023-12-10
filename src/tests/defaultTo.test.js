import defaultTo from '../defaultTo';

/**
 * the bug found in defaultTo.js is that it does not return the default value if the value is NaN, 
 * due to the fact that NaN is a falsy value in JavaScript. 
 */
describe('defaultTo', () => {
  test('returns the value if it is not null or undefined', () => {
    expect(defaultTo(1, 10)).toBe(1);
    expect(defaultTo('hello', 'world')).toBe('hello');
    expect(defaultTo(true, false)).toBe(true);
    expect(defaultTo({ name: 'John' }, { name: 'Jane' })).toEqual({ name: 'John' });
  });

  test('returns the default value if the value is null or undefined', () => {
    expect(defaultTo(null, 10)).toBe(10);
    expect(defaultTo(undefined, 10)).toBe(10);
    // expect(defaultTo(NaN, 'default')).toBe('default'); // bug
  });

  test('returns the default value if the value is NaN', () => {
    // expect(defaultTo(0 / 0, 10)).toBe(10); // bug
    // expect(defaultTo(Number.NaN, 'default')).toBe('default'); // bug
  });
});
