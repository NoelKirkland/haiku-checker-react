import haikuChecker from '../../functions/haiku-checker';

describe('haikuChecker', () => {

  test('should correctly count how many syllables are in a word with only one vowel but with no diphthongs or silent e\'s', () => {
    expect(haikuChecker("him")).toEqual(1);
  });

  test('should correctly count how many syllables are in a word with multiple vowels but with no diphthongs or silent e\'s', () => {
    expect(haikuChecker("hello")).toEqual(2);
  });
});