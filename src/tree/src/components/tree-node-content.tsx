import { defineComponent, toRefs, PropType } from 'vue'
import { IInnerTreeNode } from '../tree-type';

export default defineComponent({
  name: 'STreeNodeContent',
  props: {
    treeNode: {
      type: Object as PropType<IInnerTreeNode>
    }
  },
  setup(props, { emit, slots }) {
    const { treeNode } = toRefs(props)

    return () => (
      <span class="s-tree-node__content-label">{ treeNode.value.label }</span>
    )
  }
});
