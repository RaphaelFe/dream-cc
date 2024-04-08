import { defineStore } from 'pinia';

export const useLottoStore = defineStore('lotto', {
  state: () => ({
    numbers: [] as number[],
    additionalNumbers: [] as number[]
  }),
  actions: {
    toggleNumber(number: number, max: number) {
      const index = this.numbers.indexOf(number);
      if (index === -1) {
        this.numbers = this.numbers.length < max ? [...this.numbers, number] : this.numbers;
      } else {
        this.numbers = [...this.numbers.slice(0, index), ...this.numbers.slice(index + 1)];
      }
    },
    toggleAdditionalNumber(number: number, max: number) {
      const index = this.additionalNumbers.indexOf(number);
      if (index === -1) {
        this.additionalNumbers =
          this.additionalNumbers.length < max
            ? [...this.additionalNumbers, number]
            : this.additionalNumbers;
      } else {
        this.additionalNumbers = [
          ...this.additionalNumbers.slice(0, index),
          ...this.additionalNumbers.slice(index + 1)
        ];
      }
    },
    setNumbers(numbers: number[]) {
      this.numbers = numbers;
    },
    setAdditionalNumbers(numbers: number[]) {
      this.additionalNumbers = numbers;
    },
    reset() {
      this.numbers = [];
      this.additionalNumbers = [];
    }
  },
  persist: true
});
