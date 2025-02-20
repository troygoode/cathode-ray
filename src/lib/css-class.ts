// we disable the no-explicity-any rule because we're working around CSS modules limitation
/* eslint-disable  @typescript-eslint/no-explicit-any */
export default function cssClass(style: any, key: string): string {
  const result = style ? style[key] : "";
  return result || "";
}
