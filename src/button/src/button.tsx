import { defineComponent, toRefs } from 'vue'
import { ButtonProps, buttonProps } from './button-type'

export default defineComponent({
  name: 'QiButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, block } = toRefs(props)

    return () => {
      const defaultSlot = slots.default ? slots.default() : '按钮'
      const blockClass = block.value ? 'qi-btn--block' : ''
      return <button class={`qi-btn qi-btn--${type.value} qi-btn--${size.value} ${blockClass}`}>
        {defaultSlot}
      </button>
    }
  }
})