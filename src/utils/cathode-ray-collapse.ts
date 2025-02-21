import type { TNode, INodeBranch, TChild } from "@/utils/jsx-to-js";

interface IPossibleParent {
  children?: TChild[];
  value?: string;
}

export default function collapse(node: TNode): TNode {
  if ((node as IPossibleParent).value || !(node as IPossibleParent).children) {
    return node;
  }

  const branch = node as INodeBranch;
  const isCR = branch.name.startsWith("CathodeRay_");
  if (isCR) {
    return {
      name: branch.name,
      attributes: branch.attributes,
      children: branch.children?.map((child) => {
        return collapse(child as TNode);
      }),
    };
  } else if (branch.children?.length === 1) {
    return collapse(branch.children[0] as TNode);
  } else {
    return node;
  }
}
