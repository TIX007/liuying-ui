import { Ref } from "vue";
import { IInnerTreeNode } from "../tree-type";

export default function useOperate(data: Ref<IInnerTreeNode[]>, core : any) {
  const append = (parent:any, node:any) => {
    // 增加节点的逻辑
    console.log('useOperate append', parent, node);
  };

  const remove = (node:any) => {
    // 删除节点的逻辑
    console.log('useOperate remove', node);
  };

  return {
    append,
    remove,
  }
}
