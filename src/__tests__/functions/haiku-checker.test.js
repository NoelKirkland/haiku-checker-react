import haikuChecker from '../../functions/haiku-checker';

describe('haikuChecker', () => {

  test('should correctly count how many syllables are in a word with only one vowel but with no diphthongs or silent e\'s', () => {
    expect(haikuChecker("him")).toEqual(1);
  });

  test('should correctly count how many syllables are in a word with multiple vowels but with no diphthongs or silent e\'s', () => {
    expect(haikuChecker("hello")).toEqual(2);
  });

  test('should correctly count how many syllables are in a word with only one vowel as well as a silent e but no dipthongs', () => {
    expect(haikuChecker("code")).toEqual(1);
  });

  test('should correctly count how many syllables are in a word with multiple vowels as well as a silent e but no dipthongs', () => {
    expect(haikuChecker("complete")).toEqual(2);
  });

  test('should correctly count how many syllables are in a word with a diphthong, no other vowels, and no silent e\'s', () => {
    expect(haikuChecker("deer")).toEqual(1);
  });

  test('should correctly count how many syllables are in a word with multiple dipthongs, no other vowels, and no silent e\'s', () => {
    expect(haikuChecker("sourdough")).toEqual(2);
  });

  test('should correctly count how many syllables are in a word with a dipthong, one other vowel, but no silent e', () => {
    expect(haikuChecker("goodnight")).toEqual(2);
  });
});