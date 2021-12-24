import { mount } from '@vue/test-utils'

import MainFooter from '~/components/Footer/MainFooter.vue'

describe('MainFooter', () => {
  it('should mount the component', () => {
    const wrapper = mount(MainFooter)

    expect(wrapper.vm).toBeTruthy()
  })
})
