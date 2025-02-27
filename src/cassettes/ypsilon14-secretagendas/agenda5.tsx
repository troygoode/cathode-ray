import { P } from "@/components/CathodeRay";
import { Screen, Line, Br } from "@/components/CathodeRay/Core";
import type { IAgenda, IAgendaProps } from "./agenda";

const id = "agenda5";
const title = "CONTAIN AT ALL COSTS";

const Agenda = (props: IAgendaProps) => {
  const from = "minotaur@cloudbank.gal";
  const subject = "CONTAIN AT ALL COSTS";
  return (
    <Screen id={id}>
      <Line>FROM....... {from}</Line>
      <Line>TO......... [REDACTED]</Line>
      <Line>SUBJECT.... {subject}</Line>
      <Br />
      <P>URGENT</P>
      <P>
        IT IS IMPERATIVE THAT THE BREACH ON {props.stationName.toUpperCase()}{" "}
        DOES NOT SPREAD
      </P>
      <Line>&bull; Cr.20k TRANSFER AUTHORIZED UPON COMPLETION</Line>
      <Line>&bull; LETHAL FORCE AUTHORIZED</Line>
      <Line>&bull; CONTAIN AT ALL COSTS</Line>
      <Line>&bull; CONTAIN AT ALL COSTS</Line>
      <Line>&bull; CONTAIN AT ALL COSTS</Line>
    </Screen>
  );
};

const retval: IAgenda = { Agenda, id, title };
export default retval;
