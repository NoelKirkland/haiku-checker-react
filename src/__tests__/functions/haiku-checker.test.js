import haikuChecker from '../../functions/haiku-checker';

describe('haikuChecker', () => {

  test('should return null if there are any non-alphabetic characters', () => {
    expect(haikuChecker("Age ain't nothing but a #")).toEqual(null);
  });
});