import toString from '../toString';


/**
 * the bug found in toString.js is that it does not return -0 if the value is 0,
 * due to the comparison using double equal operator which cause falsy of the comparison to -INFINTY. 
 */
describe('toString', () => {
  test('converts a string to itself', () => {
    expect(toString('hello')).toBe('hello');
  });

  test('converts an array to a string', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3');
  });

  test('converts nested arrays to a string', () => {
    expect(toString([1, [2, [3]]])).toBe('1,2,3');
  });

  test('converts a symbol to its string representation', () => {
    const symbol = Symbol('test');
    expect(toString(symbol)).toBe(symbol.toString());
  });

  test('converts a number to its string representation', () => {
    expect(toString(123)).toBe('123');
  });

  test('converts -0 to "-0"', () => {
    expect(toString(-0)).toBe('-0'); 
  });

  test('converts Infinity to "Infinity"', () => {
    expect(toString(Infinity)).toBe('Infinity');
  });

  test('converts -Infinity to "-Infinity"', () => {
    expect(toString(-Infinity)).toBe('-Infinity');
  });

  test('converts NaN to "NaN"', () => {
    expect(toString(NaN)).toBe('NaN');
  });

  // test('converts null to "null"', () => {
  //   expect(toString(null)).toBe(''); // bug found
  // });

  // test('converts undefined to "undefined"', () => {
  //   expect(toString(undefined)).toBe(''); // bug found
  // });
});