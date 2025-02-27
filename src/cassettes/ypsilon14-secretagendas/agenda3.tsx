import { P } from "@/components/CathodeRay";
import { Screen, Line, Br } from "@/components/CathodeRay/Core";
import type { IAgenda, IAgendaProps } from "./agenda";

const id = "agenda3";
const title = "Union Busting (Military)";

const Agenda = (props: IAgendaProps) => {
  const from = `[REDACTED]@${props.companyEmailDomain}`;
  const subject = `TOP SECRET: ${props.companyName.toUpperCase()}`;
  return (
    <Screen id={id}>
      <Line>FROM....... {from}</Line>
      <Line>TO......... [REDACTED]</Line>
      <Line>SUBJECT.... {subject}</Line>
      <Br />
      <P>
        News has reached us that there is a potential union organizer on
        {props.stationName}. Upper brass is going ape shit. Fool must be making
        an awful lot of waves to get noticed from such a small rock. Glad
        we&apos;ve got a tough on board like you so we can nip this in the bud.
      </P>
      <P>
        Cr.5k bonus in your pockets if you can provide us with intelligence
        identifying the organizer and who is financing them. If you can save us
        the trouble and neutralize this whole union thing, that bonus goes up
        another Cr.15k.
      </P>
      <P>
        We have no preference on your methods and leave it up to your
        professional discretion, but keep in mind we do need to trace where
        their support is coming from. That rock is too small to have the credit
        flow we&apos;re seeing; make sure you identify the purse strings too.
      </P>
      <P>We trust you will be discreet.</P>
      <Line>AUTHORIZATION NAME: [REDACTED]</Line>
      <Line>AUTHORIZATION CODE: [REDACTED]</Line>
      <Line>&#x2713; AUTHORIZATION CONFIRMED</Line>
    </Screen>
  );
};

const retval: IAgenda = { Agenda, id, title };
export default retval;
