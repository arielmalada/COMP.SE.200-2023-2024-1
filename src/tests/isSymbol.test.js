import isSymbol from '../isSymbol';

test('checks if Symbol.iterator is a symbol', () => {
  expect(isSymbol(Symbol.iterator)).toBe(true);
});

test('checks if "abc" is not a symbol', () => {
  expect(isSymbol('abc')).toBe(false);
});

test('checks if null is not a symbol', () => {
  expect(isSymbol(null)).toBe(false);
});

test('checks if undefined is not a symbol', () => {
  expect(isSymbol(undefined)).toBe(false);
});

test('checks if an empty object is not a symbol', () => {
  expect(isSymbol({})).toBe(false);
});

test('checks if an empty array is not a symbol', () => {
  expect(isSymbol([])).toBe(false);
});

test('checks if a number is not a symbol', () => {
  expect(isSymbol(123)).toBe(false);
});

test('checks if a boolean value is not a symbol', () => {
  expect(isSymbol(true)).toBe(false);
});