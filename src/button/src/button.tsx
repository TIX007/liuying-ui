import { defineComponent, toRefs } from 'vue'
import { ButtonProps, buttonProps } from './button-type'

export default defineComponent({
  name: 'LyButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, block } = toRefs(props)

    return () => {
      const defaultSlot = slots.default ? slots.default() : '按钮'
      const blockClass = block.value ? 'ly-btn--block' : ''
      return <button class={`ly-btn ly-btn--${type.value} ly-btn--${size.value} ${blockClass}`}>
        {defaultSlot}
      </button>
    }
  }
})