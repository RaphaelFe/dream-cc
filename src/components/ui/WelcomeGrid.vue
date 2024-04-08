<script setup lang="ts">
import { useLottoStore } from '@/stores/lottoStore';
import router from '@/router';

const gameTypes = [
  {
    name: 'Eurojackpot',
    imageSrc: 'https://cdn.pixabay.com/photo/2014/10/11/16/55/lotto-484782_1280.jpg',
    imageAlt: 'Eurojackpot',
    href: '/eurojackpot'
  },
  {
    name: 'Lotto 6 aus 49',
    imageSrc: 'https://cdn.pixabay.com/photo/2014/10/11/17/34/lotto-484801_1280.jpg',
    imageAlt: 'Lotto 6 aus 49',
    href: '/eurojackpot'
  }
];
const store = useLottoStore();
const navigateAndReset = (path: string) => {
  store.reset();
  router.push(path);
};
</script>

<template>
  <div>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h1 class="text-2xl font-bold text-gray-900">Welcome to LootGuard Lottery</h1>

        <div class="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          <div v-for="game in gameTypes" :key="game.name" class="group relative">
            <div
              class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
            >
              <img
                :src="game.imageSrc"
                :alt="game.imageAlt"
                class="h-full w-full object-cover object-center"
              />
            </div>
            <h2 class="mt-6 text-sm text-gray-500">
              <RouterLink :to="game.href" @click.prevent="navigateAndReset(game.href)">
                <span class="absolute inset-0" />
                {{ game.name }}
              </RouterLink>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
