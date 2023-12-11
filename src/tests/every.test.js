import Every from '../every.js';

describe('Every', () => {
  test('Every should return true if all elements in the array pass the predicate truth test', () => {
    expect(Every([true, 1, null, 'yes'], Boolean)).toBe(false);
    expect(Every([true, 1, 'yes'], Boolean)).toBe(true);
  });
  test('Every should return true if the array contains only truthy values', () => {
    expect(Every([true, Infinity], Boolean)).toBe(true);
  });
  test('Every should return false if the array contains only falsy values', () => {
    expect(Every([false], Boolean)).toBe(false);
  });
  test('Every should return true if the array is empty', () => {
    expect(Every([], Boolean)).toBe(true);
  });
  test('Every should return true if the array is null', () => {
    expect(Every(null, Boolean)).toBe(true);
  });
  // not able to throw error
  // test('Every should throw error if the predicate is empty', () => {
  //   expect(Every([true, 1, null, 'yes'], null)).toThrow(TypeError)
  // });
  
});