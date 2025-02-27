import { P } from "@/components/CathodeRay";
import { Screen, Line, Br } from "@/components/CathodeRay/Core";
import type { IAgenda, IAgendaProps } from "./agenda";

const id = "agenda1";
const title = "Steal Research (Scientist)";

const Agenda = (props: IAgendaProps) => {
  const from = `b.lorenz@${props.companyEmailDomain}`;
  const subject = `IMPORTANT: ${props.stationName}`;
  return (
    <Screen id={id}>
      <Line>FROM....... {from}</Line>
      <Line>TO......... [REDACTED]</Line>
      <Line>SUBJECT.... {subject}</Line>
      <Br />
      <P>We have a problem.</P>
      <P>
        Rumor has it that they found something incredible down in the mines on
        {props.stationName}; something that apparently will secure funding for
        Georgiann&apos;s research team for the next ten cycles... Needless to
        say, if they get that funding our team will be history &mdash; I need
        you to take whatever it and destroy any evidence so we can claim it
        instead.
      </P>
      <P>
        Obviously this is top secret. Do not tell anybody about this and if the
        upper suits ask any questions: you were acting on your own accord. If
        you manage to pull this off, I will make sure an extra Cr.20k bonus gets
        sent your way.
      </P>
      <P>Bill</P>
      <P>
        P.S. Watch out for anyone from from Georgiann&apos;s team. She has been
        making waves about ncreased funding and politicking with the leadership
        overseeing android maintenance &mdash; so could possibly also be a
        skinjob onboard. I&apos;m sure she will try something soon. She knows
        the clock is ticking and needs that research under lock &amp; key ASAP.
        Be very careful.
      </P>
    </Screen>
  );
};

const retval: IAgenda = { Agenda, id, title };
export default retval;
