export interface IIndexable {
  // we disable the no-explicity-any rule because we're working around CSS modules limitation
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  [key: string]: any;
}

export default function cssClass(style: IIndexable, key: string): string {
  const result = style ? style[key] : "";
  return result || "";
}
