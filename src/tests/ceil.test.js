import ceil from '../ceil';

describe('ceil function', () => {
  test('should round up a number to the nearest integer', () => {
    expect(ceil(4.006)).toEqual(5);
  });

  test('should round up a number to the specified precision', () => {
    expect(ceil(6.004, 2)).toEqual(6.01);
  });

  test('should handle negative precision and round up to the nearest multiple of 10^precision', () => {
    expect(ceil(6040, -2)).toEqual(6100);
  });

  test('should handle precision of 0 and round up to the nearest integer', () => {
    expect(ceil(4.006, 0)).toEqual(5);
  });

  test('should handle precision of 0 if not specified and round up to the nearest integer', () => {
    expect(ceil(4.006)).toEqual(5);
  });

  test('should handle negative numbers and round up correctly', () => {
    expect(ceil(-4.006)).toEqual(-4);
  });

  test('should handle precision greater than the number of decimal places', () => {
    expect(ceil(6.004, 5)).toEqual(6.004);
  });

});
