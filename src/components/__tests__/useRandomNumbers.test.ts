import { describe, it, expect } from 'vitest';
import { useRandomNumbers } from '@/composables/useRandomNumbers';

describe('useRandomNumbers', () => {
  const { generateUniqueRandomNumbers } = useRandomNumbers();

  it('generates the correct amount of unique numbers', () => {
    const numbers = generateUniqueRandomNumbers(5, 1, 10);
    expect(numbers.length).equals(5);
    const uniqueNumbers = new Set(numbers);
    expect(uniqueNumbers.size).equals(5);
  });

  it('generates numbers within the specified range', () => {
    const min = 1,
      max = 10;
    const numbers = generateUniqueRandomNumbers(100, min, max);
    expect(numbers.every((n) => n >= min && n <= max)).equals(true);
  });

  it('handles edge cases correctly', () => {
    const numbersForImpossibleCase = generateUniqueRandomNumbers(20, 1, 10);
    expect(numbersForImpossibleCase.length).lessThanOrEqual(10);
  });
});
