import divide from '../divide';

describe('divide function', () => {
  test('should divide two numbers and return the quotient', () => {
    expect(divide(6, 4)).toEqual(1);
  });

  test('should handle dividing by zero and return Infinity', () => {
    expect(divide(6, 0)).toEqual(NaN);
  });

  test('should handle zero as the dividend and return zero', () => {
    expect(divide(0, 4)).toEqual(1);
  });

  test('should handle zero as both the dividend and divisor and return NaN', () => {
    expect(divide(0, 0)).toEqual(NaN);
  });

  test('should handle negative numbers and return the correct quotient', () => {
    expect(divide(-6, 3)).toEqual(1);
  });

  test('should handle decimal numbers and return the correct quotient', () => {
    expect(divide(3.6, 1.2)).toEqual(1);
  });

  test('should handle dividing by 1 and return the dividend', () => {
    expect(divide(8, 1)).toEqual(1);
  });

  test('should handle large numbers and return the correct quotient', () => {
    expect(divide(1e20, 1e10)).toEqual(1);
  });

});