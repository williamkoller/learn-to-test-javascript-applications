const { queryString } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'William',
      profession: 'Developer',
    };
    expect(queryString(obj)).toBe('name=William&profession=Developer');
  });

  it('should create a valid query string even an array is passed as value', () => {
    const obj = {
      name: 'William',
      abilities: ['JS', 'TDD'],
    };

    expect(queryString(obj)).toBe('name=William&abilities=JS,TDD');
  });
});
