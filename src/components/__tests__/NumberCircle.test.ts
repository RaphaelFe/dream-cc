import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import NumberCircle from '@/components/ui/NumberCircle.vue';

describe('NumberCircle', () => {
  it('renders with gray background when not matched', () => {
    const wrapper = mount(NumberCircle, {
      props: { number: 5, isMatched: false, isAdditional: false }
    });
    expect(wrapper.classes()).contains('bg-gray-200');
  });

  it('renders with yellow background when matched but not additional', () => {
    const wrapper = mount(NumberCircle, {
      props: { number: 5, isMatched: true, isAdditional: false }
    });
    expect(wrapper.classes()).contains('bg-lime-400');
  });

  it('renders with lime background when matched and additional', () => {
    const wrapper = mount(NumberCircle, {
      props: { number: 5, isMatched: true, isAdditional: true }
    });
    expect(wrapper.classes()).contains('bg-yellow-400');
  });

  it('displays the correct number', () => {
    const number = 5;
    const wrapper = mount(NumberCircle, {
      props: { number, isMatched: false, isAdditional: false }
    });
    expect(wrapper.text()).contains(number.toString());
  });
});
