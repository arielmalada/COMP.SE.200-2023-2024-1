import keys from '../keys';

describe('keys function', () => {
  it('should return an array of own enumerable property names of an object', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }

    Foo.prototype.c = 3;

    const fooInstance = new Foo();

    const result = keys(fooInstance);

    expect(result).toContain('a');
    expect(result).toContain('b');
    expect(result).not.toContain('c');
  });

  it('should handle non-object values and coerce them to objects', () => {
    const resultString = keys('hi');
    const resultNumber = keys(42);
    const resultBoolean = keys(true);

    expect(resultString).toEqual(['0', '1']);
    expect(resultNumber).toEqual([]);
    expect(resultBoolean).toEqual([]);
  });

  it('should handle undefined and null values', () => {
    // Test with undefined
    const resultUndefined = keys(undefined);
    expect(resultUndefined).toEqual([]);

    // Test with null
    const resultNull = keys(null);
    expect(resultNull).toEqual([]);
  });

  it('should handle empty objects', () => {
    const result = keys({});
    expect(result).toEqual([]);
  });

  it('should handle non-enumerable properties', () => {
    const obj = Object.create(null, {
      a: {
        value: 1,
        enumerable: false,
      },
      b: {
        value: 2,
        enumerable: true,
      },
    });

    const result = keys(obj);

    expect(result).toEqual(['b']);
  });

});
