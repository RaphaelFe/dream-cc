<script setup lang="ts">
import githubIcon from '@/assets/img/github.svg';
import linkedinIcon from '@/assets/img/linkedin.svg';
import type { NavigationLink } from '@/types';

const navigation: NavigationLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/lootguard',
    icon: githubIcon
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/raphael-fellenberg-078234194/',
    icon: linkedinIcon
  }
];
</script>

<template>
  <footer class="bg-white">
    <div
      class="mx-auto container border-t border-gray-900/10 p-6 mt-12 md:flex md:items-center md:justify-between lg:px-8"
    >
      <div class="flex justify-center space-x-6 md:order-2">
        <template v-for="item in navigation" :key="item.name">
          <a
            v-if="item"
            :href="item.href"
            :title="item.name"
            :aria-label="item.name"
            target="_blank"
            class="text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">{{ item.name }}</span>
            <img
              :src="item.icon"
              :alt="item.name"
              :title="item.name"
              class="h-6 w-6"
              aria-hidden="true"
            />
          </a>
        </template>
      </div>
      <div class="mt-8 md:order-1 md:mt-0">
        <p class="text-center text-xs leading-5 text-gray-500">
          &copy; 2024 LootGuard Lottery, Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
