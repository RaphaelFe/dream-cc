import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import HomeView from '@/views/HomeView.vue';
import WelcomeGrid from '../../components/ui/WelcomeGrid.vue';
import { createPinia, setActivePinia } from 'pinia';

describe('HomePage', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('renders correctly and includes the WelcomeGrid component', () => {
    const wrapper = mount(HomeView);
    expect(wrapper.exists()).equals(true);
    const welcomeGridComponent = wrapper.findComponent(WelcomeGrid);
    expect(welcomeGridComponent.exists()).equals(true);
  });
});
