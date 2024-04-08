export function useRandomNumbers() {
  const generateUniqueRandomNumbers = (count: number, min: number, max: number): number[] => {
    if (max - min + 1 < count) {
      return [];
    }

    const numbers = new Set<number>();
    while (numbers.size < count) {
      const number = Math.floor(Math.random() * (max - min + 1)) + min;
      numbers.add(number);
    }
    return Array.from(numbers);
  };

  return {
    generateUniqueRandomNumbers
  };
}
