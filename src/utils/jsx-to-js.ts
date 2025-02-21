import * as React from "react";

export type TAttributes = {
  [key: string]: any;
};
export interface INodeBranch {
  name: string;
  attributes?: TAttributes;
  children?: TChild[];
}
export interface INodeLeaf {
  name: string;
  attributes?: TAttributes;
  value: string;
}
export type TNode = INodeBranch | INodeLeaf;
export type TChild = TNode | React.JSX.Element | string;

function all<T>(arr: T[], test: (t: T) => boolean): boolean {
  for (let t of arr) {
    if (!test(t)) {
      return false;
    }
  }
  return true;
}

function toJSONNode(element: React.JSX.Element): TChild {
  if (!element || !element.type) {
    return element;
  }

  const Component = element.type;
  const res: TNode = {
    name: element.type,
  };

  res.attributes = { ...element.props };

  let children = element.props ? element.props.children : null;
  if (res.attributes && res.attributes.hasOwnProperty("children")) {
    delete res.attributes.children;
  }
  if (!Object.keys((res.attributes as object) || {}).length) {
    delete res.attributes;
  }

  if (typeof Component !== "string") {
    res.name = Component.name;
    const context = (element as any).context || {};
    if (
      Component.prototype &&
      typeof Component.prototype.render === "function"
    ) {
      // ReactComponent
      children = new Component(element.props, context).render();
    } else {
      // function component
      children = Component(element.props, context);
    }
  }

  if (Array.isArray(children)) {
    res.children = children.map((child) => toJSON(child));
  } else {
    res.children = children ? [toJSON(children)] : [];
  }

  if (!res.children?.length) {
    return {
      name: res.name,
      attributes: res.attributes,
    };
  } else if (res.children.length === 1 && typeof res.children[0] === "string") {
    return {
      name: res.name,
      attributes: res.attributes,
      value: res.children[0] as string,
    };
  } else if (
    all(res.children, (c) => typeof c === "string" || typeof c === "number")
  ) {
    return {
      name: res.name,
      attributes: res.attributes,
      value: res.children.map((c) => c.toString()).join(""),
    };
  } else {
    return res;
  }
}

export default function toJSON(element: React.JSX.Element): TNode {
  return toJSONNode(element) as TNode;
}
