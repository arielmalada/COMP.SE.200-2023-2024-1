import words from '../words';

describe('words function', () => {
  test('returns an array of words without arguments', () => {
    expect(words('Hello World')).toEqual(['Hello', 'World']);
    expect(words('Lorem ipsum dolor sit amet')).toEqual(['Lorem', 'ipsum', 'dolor', 'sit', 'amet']);
    expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles']);
  });

  test('returns an array of words matching the pattern', () => {
    expect(words('Hello World', /[A-Z][a-z]+/g)).toEqual(['Hello', 'World']);
    expect(words('Lorem ipsum dolor sit amet', /[a-z]+/g)).toEqual(['orem', 'ipsum', 'dolor', 'sit', 'amet']);
  });

  test('returns an empty array when no words match the pattern', () => {
    expect(words('12345', /[a-z]+/g)).toEqual([]);
    expect(words('Lorem ipsum dolor sit amet', /[0-9]+/g)).toEqual([]);
  });

  test('returns an empty array when the input string is empty', () => {
    expect(words('', /[a-z]+/g)).toEqual([]);
  });
});