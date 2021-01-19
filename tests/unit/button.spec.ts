import {VButton} from '@/packages/button/button'
import { mount, shallowMount } from '@vue/test-utils';

describe('button.tsx', () => {
  it('set button type', async () => {
    const wrapper = mount(VButton);
    await wrapper.setProps({ type: 'success' })
    expect(wrapper.classes('v-button--success')).toBe(true)
  })
  it('set button size', async () => {
    const wrapper = mount(VButton as any, { propsData: { size: 'small' } });
    expect(wrapper.classes('v-button--small')).toBe(true)
    await wrapper.setProps({ size: 'mini' })
    expect(wrapper.classes('v-button--mini')).toBe(true)
  })
})
