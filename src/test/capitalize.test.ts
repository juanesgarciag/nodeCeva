import { expect, test, describe } from '@jest/globals';
import { getCapitalizeFirstWord } from '../utils/capitalize';

describe('getCapitalizeFirstWord', () => {
  test('should capitalize first letter of each word', () => {
    expect(getCapitalizeFirstWord('john doe')).toBe('John Doe');
  });

  test('should handle single word', () => {
    expect(getCapitalizeFirstWord('john')).toBe('John');
  });

  test('should handle empty string', () => {
    expect(getCapitalizeFirstWord('')).toBe('');
  });

  test('should handle mixed case input', () => {
    expect(getCapitalizeFirstWord('jOhN dOe')).toBe('John Doe');
  });

  test('should handle multiple spaces', () => {
    expect(getCapitalizeFirstWord('john  doe')).toBe('John  Doe');
  });

  test('should handle single letter words', () => {
    expect(getCapitalizeFirstWord('a b c')).toBe('a b c');
  });

  test('should throw error for null input', () => {
    expect(() => getCapitalizeFirstWord(null as unknown as string))
      .toThrow('Failed to capitalize first word with null');
  });

  test('should handle words with numbers', () => {
    expect(getCapitalizeFirstWord('user123 test')).toBe('User123 Test');
  });
});