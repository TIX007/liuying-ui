
import { defineComponent, toRefs } from 'vue'
import { TreeProps, treeProps } from './tree-type'

export default defineComponent({
  name: 'Tree',
  props: treeProps,
  setup(props: TreeProps) {
    return () => {
      return (
        <div class="ly-tree"></div>
      )
    }
  }
})   
