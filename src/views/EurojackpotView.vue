<script setup lang="ts">
import eurojackpot from '@/assets/img/eurojackpot.svg';
import DrawGrid from '@/components/ui/DrawGrid.vue';
</script>

<template>
  <div class="flex flex-col justify-center items-center px-6 py-4">
    <h1>
      <span class="sr-only">Eurojackpot</span>
      <img class="h-8 w-auto" :src="eurojackpot" alt="Eurojackpot" />
    </h1>
    <DrawGrid
      :max-numbers="50"
      :max-fields="5"
      :additional="true"
      :additional-max-number="12"
      :additional-max-fields="2"
    />
  </div>
</template>
