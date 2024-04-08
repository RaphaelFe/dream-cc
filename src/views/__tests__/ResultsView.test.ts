import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import ResultsView from '@/views/ResultsView.vue';
import NumberCircle from '@/components/ui/NumberCircle.vue';
import { nextTick } from 'vue';

vi.mock('@vue/apollo-composable', () => {
  return {
    useQuery: vi.fn(() => ({
      result: {
        draw: {
          draws: [
            {
              date: '2024-04-05',
              numbers: ['5', '8', '16', '30', '37'],
              additionalNumbers: ['1', '10'],
              jackpot: '64000000'
            }
          ],
          success: true
        }
      },
      loading: false,
      error: null
    }))
  };
});

describe('ResultsView', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('renders properly and displays draw results', async () => {
    const wrapper = mount(ResultsView);
    await nextTick();
    expect(wrapper.text()).toContain('Eurojackpot results:');
    expect(wrapper.findAllComponents(NumberCircle)).toHaveLength(7);

    const numberCircles = wrapper.findAllComponents(NumberCircle);
    expect(numberCircles[0].props('number')).toBe(5);
  });
});
