import isBoolean from '../isBoolean';

describe('isBoolean', () => {
  test('checks if true is a boolean value', () => {
    expect(isBoolean(true)).toBe(true);
  });
  test('checks if null is not a boolean value', () => {
    expect(isBoolean(null)).toBe(false);
  });
  test('checks if undefined is not a boolean value', () => {
    expect(isBoolean(undefined)).toBe(false);
  });
  test('checks if "true" is not a boolean value', () => {
    expect(isBoolean('true')).toBe(false);
  });
  test('checks if an empty object is not a boolean value', () => {
    expect(isBoolean({})).toBe(false);
  });
})