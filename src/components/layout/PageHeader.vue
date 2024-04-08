<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import { RouterLink } from 'vue-router';
import type { NavigationLink } from '@/types';

const navigation: NavigationLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Eurojackpot', href: '/eurojackpot' }
];
</script>

<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="mx-auto container px-6">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <RouterLink to="/">
              <span class="sr-only">LootGuard Lottery</span>
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="LootGuard Lottery"
              />
            </RouterLink>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <template v-for="link in navigation" :key="link.name">
                <RouterLink :to="link.href" v-slot="{ isActive, isExactActive }">
                  <span
                    :class="[
                      'block rounded-md px-3 py-2 text-sm font-medium',
                      isActive || isExactActive
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    ]"
                  >
                    {{ link.name }}
                  </span>
                </RouterLink>
              </template>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex sm:hidden">
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <template v-for="link in navigation" :key="link.name">
          <RouterLink :to="link.href" v-slot="{ isActive, isExactActive }">
            <span
              :class="[
                'block rounded-md px-3 py-2 text-sm font-medium',
                isActive || isExactActive
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              ]"
            >
              {{ link.name }}
            </span>
          </RouterLink>
        </template>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
