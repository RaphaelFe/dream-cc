import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import DrawDivider from '@/components/ui/DrawDivider.vue';
import { PlusIcon } from '@heroicons/vue/20/solid';

describe('DividerComponent', () => {
  it('mounts properly', () => {
    const wrapper = mount(DrawDivider);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the plus icon', () => {
    const wrapper = mount(DrawDivider);
    const icon = wrapper.findComponent(PlusIcon);
    expect(icon.exists()).equals(true);
  });
});
