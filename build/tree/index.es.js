import { ref, unref, computed, defineComponent, toRefs, createVNode, createTextVNode, withDirectives, vModelCheckbox } from "vue";
function generateInnerTree(tree, level = 0, parentNode = {}) {
  level++;
  return tree.reduce((prev, cur) => {
    const o = { ...cur };
    o.level = level;
    if (level > 1 && parentNode) {
      o.parentId = parentNode.id;
    }
    if (o.children) {
      const children = generateInnerTree(o.children, level, o);
      delete o.children;
      return prev.concat(o, children);
    } else {
      o.isLeaf = true;
      return prev.concat(o);
    }
  }, []);
}
function useTree(node) {
  const innerData = ref(generateInnerTree(unref(node)));
  const toggleNode = (node2) => {
    const cur = innerData.value.find((item) => item.id === node2.id);
    if (cur) {
      cur.expanded = !cur.expanded;
    }
  };
  const expandedTree = computed(() => {
    let excludedNodes = [];
    const result = [];
    for (const item of innerData.value) {
      if (excludedNodes.includes(item)) {
        continue;
      }
      if (item.expanded !== true) {
        excludedNodes = getChildren(item);
      }
      result.push(item);
    }
    return result;
  });
  const getChildren = (node2, recursive = true) => {
    const result = [];
    const startIndex = innerData.value.findIndex((item) => item.id === node2.id);
    for (let i = startIndex + 1; i < innerData.value.length && node2.level < innerData.value[i].level; i++) {
      if (recursive) {
        result.push(innerData.value[i]);
      } else if (node2.level === innerData.value[i].level - 1) {
        result.push(innerData.value[i]);
      }
    }
    return result;
  };
  const getParent = (node2) => {
    const parentNode = innerData.value.find((item) => item.id === node2.parentId);
    return parentNode;
  };
  const setChecked = (node2) => {
    const parentNode = getParent(node2);
    if (!parentNode)
      return;
    const siblingNodes = getChildren(parentNode, true);
    const siblingCheckStatus = siblingNodes.every((sibling) => sibling.checked);
    parentNode.checked = siblingCheckStatus;
    const siblingIncheckedStatus = siblingNodes.some((child) => child.checked);
    if (siblingCheckStatus) {
      parentNode.inChecked = false;
    } else if (siblingIncheckedStatus) {
      parentNode.inChecked = true;
    } else {
      parentNode.inChecked = false;
    }
    if (parentNode.parentId)
      setChecked(parentNode);
  };
  const toggleCheckNode = (node2) => {
    node2.checked = !node2.checked;
    node2.inChecked = false;
    getChildren(node2).forEach((child) => {
      child.checked = node2.checked;
    });
    setChecked(node2);
  };
  const getChildrenExpanded = (node2, result = []) => {
    const childrenNodes = getChildren(node2, false);
    result.push(...childrenNodes);
    childrenNodes.forEach((item) => {
      if (item.expanded) {
        getChildrenExpanded(item, result);
      }
    });
    return result;
  };
  return {
    innerData,
    toggleNode,
    expandedTree,
    getChildren,
    toggleCheckNode,
    getChildrenExpanded
  };
}
const treeProps = {
  data: {
    type: Object,
    required: true
  },
  checkable: {
    type: Boolean,
    default: false
  },
  lineable: {
    type: Boolean,
    default: false
  },
  operable: {
    type: Boolean,
    default: false
  }
};
var Tree = defineComponent({
  name: "Tree",
  props: treeProps,
  setup(props, {
    slots
  }) {
    const {
      data,
      checkable,
      lineable
    } = toRefs(props);
    const NODE_INDENT = 24;
    const NODE_HEIGHT = 28;
    const {
      expandedTree,
      toggleNode,
      getChildrenExpanded,
      toggleCheckNode
    } = useTree(data);
    return () => {
      return createVNode("div", {
        "class": "ly-tree"
      }, [expandedTree.value.map((treeNode) => {
        const {
          level,
          isLeaf,
          expanded
        } = treeNode;
        return createVNode("div", {
          "class": "ly-tree-node hover:bg-slate-300 relative leading-8 flex items-center",
          "style": {
            paddingLeft: `${NODE_INDENT * (level - 1)}px`
          }
        }, [!isLeaf && expanded && lineable && createVNode("span", {
          "class": "ly-tree-node__vine absolute w-px bg-slate-300",
          "style": {
            height: `${NODE_HEIGHT * getChildrenExpanded(treeNode).length}px`,
            left: `${NODE_INDENT * (level - 1) + 8}px`,
            top: `${NODE_HEIGHT}px`
          }
        }, null), isLeaf ? createVNode("span", {
          "style": {
            display: "inline-block",
            width: "18px"
          }
        }, null) : slots.icon ? slots.icon({
          nodeData: treeNode,
          toggleNode
        }) : createVNode("svg", {
          "onClick": () => toggleNode(treeNode),
          "style": {
            width: "18px",
            height: "18px",
            display: "inline-block",
            transform: expanded ? "rotate(90deg)" : ""
          },
          "viewBox": "0 0 1024 1024",
          "xmlns": "http://www.w3.org/2000/svg"
        }, [createVNode("path", {
          "fill": "currentColor",
          "d": "M384 192v640l384-320.064z"
        }, null)]), checkable.value && createVNode("span", {
          "class": `relative ${treeNode.inChecked ? "ly-tree__inChecked" : ""}`
        }, [treeNode.inChecked && createVNode("span", {
          "class": "ly-tree-checkbox__inner cursor-pointer",
          "onClick": () => toggleCheckNode(treeNode)
        }, [createTextVNode("-")]), withDirectives(createVNode("input", {
          "type": "checkbox",
          "style": {
            marginRight: "8px"
          },
          "onUpdate:modelValue": ($event) => treeNode.checked = $event,
          "onClick": () => toggleCheckNode(treeNode)
        }, null), [[vModelCheckbox, treeNode.checked]])]), slots.content ? slots.content(treeNode) : treeNode.label]);
      })]);
    };
  }
});
var index = {
  install(app) {
    app.component(Tree.name, Tree);
  }
};
export { Tree, index as default };
