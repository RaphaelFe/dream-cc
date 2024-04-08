<script setup lang="ts">
import { defineProps } from 'vue';
import { useLottoStore } from '@/stores/lottoStore';
import type { DrawGrid } from '@/types';
import DrawDivider from '@/components/ui/DrawDivider.vue';
import { useRandomNumbers } from '@/composables/useRandomNumbers';
const { generateUniqueRandomNumbers } = useRandomNumbers();

const props = defineProps<DrawGrid>();
const store = useLottoStore();

const genereateRandomNumbers = () => {
  const numbers = generateUniqueRandomNumbers(props.maxFields, 1, props.maxNumbers);
  const additionalNumbers = props.additional
    ? generateUniqueRandomNumbers(props.additionalMaxFields ?? 0, 1, props.additionalMaxNumber ?? 0)
    : [];

  store.setNumbers(numbers);
  if (props.additional) {
    store.setAdditionalNumbers(additionalNumbers);
  }
};
</script>

<template>
  <div class="max-w-[450px] py-8">
    <div>
      <div class="flex flex-wrap">
        <div
          v-for="i in props.maxNumbers"
          :key="`number-${i}}`"
          class="w-[40px] h-[40px] ml-[5px] mb-[5px] flex items-center justify-center p-1 border border-gray-700 text-gray-500 cursor-pointer"
          :class="{ 'bg-yellow-300': store.numbers.includes(i) }"
          @click="store.toggleNumber(i, props.maxFields)"
        >
          {{ i }}
        </div>
      </div>
      <div v-if="props.additional">
        <DrawDivider class="py-2" />
        <div class="flex flex-wrap max-w-[270px] mx-auto">
          <div
            v-for="i in props.additionalMaxNumber"
            :key="`additional-${i}`"
            class="w-[40px] h-[40px] ml-[5px] mb-[5px] flex items-center justify-center p-1 border border-gray-700 text-gray-500 cursor-pointer"
            :class="{ 'bg-yellow-300': store.additionalNumbers.includes(i) }"
            @click="store.toggleAdditionalNumber(i, props.additionalMaxFields ?? 0)"
          >
            {{ i }}
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <button
        @click="store.reset"
        class="mt-4 mr-2 px-4 py-2 bg-red-500 text-white rounded"
        aria-label="reset"
      >
        Reset
      </button>
      <button
        @click="genereateRandomNumbers"
        class="mt-4 mr-2 px-4 py-2 bg-yellow-500 text-white rounded"
        aria-label="generate-random"
      >
        Random
      </button>
      <template
        v-if="
          props.additional && store.additionalNumbers.length === 2 && store.numbers.length === 5
        "
      >
        <RouterLink
          to="results"
          class="mt-4 px-4 py-2 bg-green-500 text-white rounded"
          aria-label="view-results"
          >Results</RouterLink
        >
      </template>
    </div>
  </div>
</template>
