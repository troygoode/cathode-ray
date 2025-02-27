import { P } from "@/components/CathodeRay";
import { Screen, Line, Br } from "@/components/CathodeRay/Core";
import type { IAgenda } from "./agenda";

const id = "agenda8";
const title = "DO NOT TRUST HIM";

const Agenda = () => {
  const from = "[ERROR]";
  const subject = "INSTRUCTIONS";
  return (
    <Screen id={id}>
      <Line>FROM....... {from}</Line>
      <Line>TO......... [REDACTED]</Line>
      <Line>SUBJECT.... {subject}</Line>
      <Br />
      <P>DO NOT TRUST HIM</P>
    </Screen>
  );
};

const retval: IAgenda = { Agenda, id, title };
export default retval;
