import { shallowMount, Wrapper } from '@vue/test-utils';
import InputText from "@/components/input/InputText.vue";

describe("InputText.vue", () => {
  it(".eee doesn't exist", () => {
    const wrapper = shallowMount(InputText, {});
    expect(wrapper.find('.eee').exists()).toBeFalsy()
  });
  it(".InputTextContainer does exist", () => {
    const wrapper = shallowMount(InputText, {});
    expect(wrapper.find('.InputTextContainer').exists()).toBeTruthy()
  });
});