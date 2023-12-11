import isDate from '../isDate'

describe('isDate', () => {
  test('should return true if the value is a Date', () => {
    expect(isDate(new Date())).toBe(true)
  })

  test('should return false if the value is not a Date', () => {
    expect(isDate('Mon April 23 2012')).toBe(false)
  })
}
)