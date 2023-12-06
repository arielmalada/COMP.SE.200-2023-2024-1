import add from '../add';

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 0 + 0 to equal 0', () => {
  expect(add(0, 0)).toBe(0);
});

test('adds -5 + 5 to equal 0', () => {
  expect(add(-5, 5)).toBe(0);
});

test('adds 10 + (-3) to equal 7', () => {
  expect(add(10, -3)).toBe(7);
});

// floating number
test('adds 1.5 + 2.5 to equal 4', () => {
  expect(add(1.5, 2.5)).toBe(4);
});

test('adds 0.1 + 0.2 to equal 0.3', () => {
  expect(add(0.1, 0.2)).toBeCloseTo(0.3);
});

test('adds -3.7 + 5.2 to equal 1.5', () => {
  expect(add(-3.7, 5.2)).toBeCloseTo(1.5);
})
