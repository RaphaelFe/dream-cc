<script setup lang="ts">
import { computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { useLottoStore } from '@/stores/lottoStore';
import NumberCircle from '@/components/ui/NumberCircle.vue';

const GET_EUROJACKPOT_DRAWS = gql`
  query GetEurojackpotDraws {
    draw(limit: 1, type: "eurojackpot") {
      backendError
      draws {
        date
        numbers
        additionalNumbers
        jackpot
        odds {
          link
          numberOfWinners
          numbers
          odd
          winningClass
          withOptions
        }
      }
      success
    }
  }
`;

const { result, loading, error } = useQuery(GET_EUROJACKPOT_DRAWS);
const store = useLottoStore();

const matchedNumbers = computed(() => {
  if (!result.value || !result.value.draw.draws.length) {
    return {
      numbers: [],
      additionalNumbers: []
    };
  }

  const latestDraw = result.value.draw.draws[0];
  const drawNumbers = latestDraw.numbers.map(Number);
  const drawAdditionalNumbers = latestDraw.additionalNumbers.map(Number);

  return {
    numbers: store.numbers.filter((number) => drawNumbers.includes(number)),
    additionalNumbers: store.additionalNumbers.filter((number) =>
      drawAdditionalNumbers.includes(number)
    )
  };
});
</script>

<template>
  <div class="flex flex-col items-center px-6 py-4">
    <h1 class="text-xl font-bold">Eurojackpot results:</h1>
    <div v-if="loading">Lädt...</div>
    <div v-if="error">Fehler: {{ error.message }}</div>
    <div v-if="result">
      <div v-for="(draw, index) in result.draw.draws" :key="index" class="mt-4 mb-8">
        <p class="font-bold text-xl mb-4">
          Draw from : {{ new Date(draw.date).toLocaleDateString() }}
        </p>
        <div class="flex flex-wrap justify-center" v-if="draw.numbers">
          <NumberCircle
            v-for="number in draw.numbers.map((num: string) => Number(num))"
            :key="`draw-number-${number}`"
            :number="number"
          />
        </div>
        <div class="flex flex-wrap justify-center" v-if="draw.additionalNumbers">
          <NumberCircle
            v-for="number in draw.additionalNumbers.map((num: string) => Number(num))"
            :key="`draw-additional-${number}`"
            :number="number"
            is-additional
          />
        </div>
      </div>
      <h2 class="text-xl font-bold mt-6">Your Tips:</h2>
      <div class="mt-2">
        <div class="flex flex-wrap justify-center mb-4">
          <NumberCircle
            v-for="number in store.numbers"
            :key="`selected-number-${number}`"
            :number="number"
            :is-matched="matchedNumbers.numbers.includes(number)"
          />
        </div>
        <div class="flex flex-wrap justify-center">
          <NumberCircle
            v-for="number in store.additionalNumbers"
            :key="`selected-additional-${number}`"
            :number="number"
            :is-matched="matchedNumbers.additionalNumbers.includes(number)"
            is-additional
          />
        </div>
      </div>
    </div>
  </div>
</template>
