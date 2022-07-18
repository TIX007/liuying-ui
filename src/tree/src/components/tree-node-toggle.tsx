import { defineComponent, toRefs, renderSlot, useSlots, inject, PropType } from 'vue'
import { IInnerTreeNode } from '../tree-type';

export default defineComponent({
  name: 'STreeNodeToggle',
  props: {
    treeNode: {
      type: Object as PropType<IInnerTreeNode>
    }
  },
  setup(props, { emit, slots }) {
    const { treeNode } = toRefs(props)

    return () => (
      <svg style={{
          transform: treeNode.value.expanded ? 'rotate(90deg)': ''
        }} viewBox="0 0 1024 1024"
      >
        <path fill="currentColor" d="M384 192v640l384-320.064z"></path>
      </svg>
    )
  }
});
