import * as Core from "@/components/CathodeRay/Core";

export { Core };

export function Header({ label }: { label: string }) {
  function repeatString(str: string, num: number) {
    return new Array(num + 1).join(str);
  }

  return (
    <Core.Wrapper>
      <Core.Line>{label.toUpperCase()}</Core.Line>
      <Core.Line>{repeatString("=", label.length)}</Core.Line>
      <Core.Br />
    </Core.Wrapper>
  );
}
