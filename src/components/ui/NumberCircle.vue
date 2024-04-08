<script setup lang="ts">
import { defineProps, computed } from 'vue';
import type { NumberCircle } from '@/types';

const props: NumberCircle = defineProps({
  number: { type: Number, required: true },
  isMatched: Boolean,
  isAdditional: Boolean
});

const numberClass = computed(() => ({
  'bg-lime-400': props.isMatched && !props.isAdditional,
  'bg-yellow-400': props.isMatched && props.isAdditional,
  'bg-gray-200': !props.isMatched
}));
</script>

<template>
  <div
    :class="numberClass"
    class="flex items-center justify-center w-[40px] h-[40px] rounded-full m-1"
  >
    {{ number }}
  </div>
</template>
