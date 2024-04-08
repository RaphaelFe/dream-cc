<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navigation from '@/components/layout/PageHeader.vue';
import Footer from '@/components/layout/PageFooter.vue';
</script>

<template>
  <div>
    <Navigation />

    <main class="container mx-auto">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>
