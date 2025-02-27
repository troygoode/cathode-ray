import { P } from "@/components/CathodeRay";
import { Screen, Line, Br } from "@/components/CathodeRay/Core";
import type { IAgenda, IAgendaProps } from "./agenda";

const id = "agenda6";
const title = "Angus (Golyanovo II Bratva)";

const Agenda = (props: IAgendaProps) => {
  const from = "angus@canyonheavy.market";
  const subject = "MUTUAL FRIENDS";
  return (
    <Screen id={id}>
      <Line>FROM....... {from}</Line>
      <Line>TO......... [REDACTED]</Line>
      <Line>SUBJECT.... {subject}</Line>
      <Br />
      <P>
        You don&apos;t know me, but I know the (very, very dangerous) people you
        owe an awful lot of creds to. Not looking great for you right now tbh,
        but I think we can help each other out.
      </P>
      <P>
        I&apos;ve been seeing a flurry of comms traffic lighting up your little
        rock hopper like the dance floor at Sem&apos;s place and it don&apos;t
        make any sense. There is more going on here than a simple supply run.
      </P>
      <P>
        People want something off that rock and they want it bad. If they want
        it so bad, that means I guess I want it too. Bring whatever it is they
        want from {props.stationName} to me here on Prospero&apos;s Dream and
        I&apos;ll drop Cr.20k in your pocket AND we can do some more work
        together to keep the wolves at bay while you work your way back into the
        black.
      </P>
      <P>
        If you bring some friends along you can split the reward I guess. Up to
        you.
      </P>
      <P>Your new best friend in the galaxy: ANGUS</P>
    </Screen>
  );
};

const retval: IAgenda = { Agenda, id, title };
export default retval;
