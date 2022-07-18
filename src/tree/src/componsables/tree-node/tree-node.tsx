import { defineComponent, toRefs, renderSlot, useSlots, inject } from 'vue'
import { TreeNodeProps, treeNodeProps } from './tree-node.type'
import { NODE_HEIGHT, NODE_INDENT } from '../../const';
import STreeNodeToggle from '../../components/tree-node-toggle'

export default defineComponent({
  name: 'STreeNode',
  props: treeNodeProps,
  setup(props: TreeNodeProps, { emit, slots }) {
    const { treeNode, checkable } = toRefs(props)

    const { getChildren, toggleNode, toggleCheckNode } = inject('TREE_FACTORY')

    return () => (
      <div class="s-tree-node" style={{
          paddingLeft: `${24 * (treeNode.value.level - 1)}px`
        }}
      >
        {/* 连接线 */}
        <span class={[
            !treeNode.value.isLeaf && treeNode.value.expanded && 's-tree-node__vline',
          ]} style={{
            height: `${NODE_HEIGHT * (getChildren(treeNode.value, { expanded: true }).length - 1) + NODE_HEIGHT / 2 + 1}px`,
            left: `${NODE_INDENT * (treeNode.value.level - 1) + 11}px`,
            top: `${NODE_HEIGHT}px`,
          }}
        ></span>

        <div class="s-tree-node__content">
          {/* <span class={[
              treeNode.value.level !== 1 && 's-tree-node__hline',
            ]}
          ></span> */}

          {/* 展开/收起按钮 */}
          <span
            class="s-tree-node__toggle"
            onClick={() => toggleNode(treeNode.value)}
          >
            {
              treeNode.value.isLeaf
              ? <span class="s-tree-node__indent" />
              : slots.icon
                ? renderSlot(useSlots(), 'icon', treeNode.value)
                : <STreeNodeToggle treeNode={treeNode.value}></STreeNodeToggle>
            }
          </span>
          

          {/* 勾选按钮 */}
          {
            checkable.value &&
            <input
              type="checkbox"
              key={treeNode.value.id}
              v-model={treeNode.value.checked}
              onClick={() => {
                toggleCheckNode(treeNode.value);
              }}
            />
          }

          {/* 节点内容 */}
          {
            slots.content
            ? renderSlot(useSlots(), 'content', treeNode.value)
            : treeNode.value.label
          }
        </div>
      </div>
    )
  }
});
