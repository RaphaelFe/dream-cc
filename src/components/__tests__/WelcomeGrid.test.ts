import { beforeEach, describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import WelcomeGrid from '@/components/ui/WelcomeGrid.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia, setActivePinia } from 'pinia';

const routes = [{ path: '/eurojackpot', component: { template: 'Test' } }];
const router = createRouter({
  history: createWebHistory(),
  routes
});

describe('WelcomeGrid', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('renders correctly and navigates to eurojackpot', async () => {
    const wrapper = mount(WelcomeGrid, {
      global: {
        plugins: [router]
      }
    });

    await router.isReady();

    const gameLinks = wrapper.findAll('a');
    expect(gameLinks.length).toBe(2);

    expect(gameLinks[0].attributes('href')).equals('/eurojackpot');
    expect(gameLinks[1].attributes('href')).equals('/eurojackpot');

    expect(gameLinks[0].text()).contains('Eurojackpot');
    expect(gameLinks[1].text()).contains('Lotto 6 aus 49');
  });
});
