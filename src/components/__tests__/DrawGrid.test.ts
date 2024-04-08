import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import DrawGrid from '@/components/ui/DrawGrid.vue';
import { useLottoStore } from '@/stores/lottoStore';
import HomeView from '@/views/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';
import ResultsView from '../../views/ResultsView.vue';

vi.mock('@/composables/useRandomNumbers', () => ({
  useRandomNumbers: () => ({
    generateUniqueRandomNumbers: vi.fn().mockImplementation((max, min, count) => {
      return [...Array(count).keys()].map((i) => i + min);
    })
  })
}));

describe('DrawGrid', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', name: 'home', component: HomeView },
      { path: '/results', name: 'results', component: ResultsView }
    ]
  });

  it('generates and resets numbers without additional numbers', async () => {
    const wrapper = mount(DrawGrid, {
      props: { maxNumbers: 5, maxFields: 50 },
      global: {
        stubs: {
          RouterLink: true
        }
      }
    });
    await wrapper.find('button[aria-label="generate-random"]').trigger('click');

    const store = useLottoStore();
    expect(store.numbers).length(5);
    expect(store.additionalNumbers).length(0);

    await wrapper.find('button[aria-label="reset"]').trigger('click');
    expect(store.numbers).length(0);
  });

  it('generates and resets numbers with additional numbers', async () => {
    const wrapper = mount(DrawGrid, {
      props: {
        maxNumbers: 5,
        maxFields: 50,
        additional: true,
        additionalMaxNumber: 2,
        additionalMaxFields: 12
      },
      global: {
        stubs: {
          RouterLink: true
        }
      }
    });
    await wrapper.find('button[aria-label="generate-random"]').trigger('click');

    const store = useLottoStore();
    expect(store.numbers).length(5);
    expect(store.additionalNumbers).length(2);

    await wrapper.find('button[aria-label="reset"]').trigger('click');
    expect(store.numbers).length(0);
    expect(store.additionalNumbers).length(0);
  });

  it('shows the results button only when all fields are correctly filled', async () => {
    const wrapper = mount(DrawGrid, {
      props: {
        maxNumbers: 5,
        maxFields: 50,
        additional: true,
        additionalMaxNumber: 10,
        additionalMaxFields: 2
      },
      global: {
        plugins: [router],
        stubs: {
          RouterLink: true
        }
      }
    });

    const store = useLottoStore();
    store.setNumbers([1, 2, 3, 4, 5]);
    store.setAdditionalNumbers([1, 2]);

    await router.isReady();
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent({ name: 'RouterLink' }).exists()).equals(true);
  });
});
