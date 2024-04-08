import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import EurojackpotView from '@/views/EurojackpotView.vue';
import DrawGrid from '@/components/ui/DrawGrid.vue';
import { createPinia, setActivePinia } from 'pinia';

describe('EurojackpotPage', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('renders properly and passes props to DrawGrid', () => {
    const wrapper = mount(EurojackpotView);
    expect(wrapper.find('img[alt="Eurojackpot"]').exists()).equals(true);
    const drawGridComponent = wrapper.findComponent(DrawGrid);
    expect(drawGridComponent.exists()).equals(true);
    console.log(drawGridComponent.props());
    expect(drawGridComponent.props()).deep.equal({
      maxNumbers: 50,
      maxFields: 5,
      additionalMaxNumber: 12,
      additionalMaxFields: 2,
      additional: true
    });
  });
});
