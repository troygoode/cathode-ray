import { P } from "@/components/CathodeRay";
import { Screen, Line, Br } from "@/components/CathodeRay/Core";
import type { IAgenda, IAgendaProps } from "./agenda";

const id = "agenda4";
const title = "Don't Do Drugs (Teamster)";

const Agenda = (props: IAgendaProps) => {
  const from = `q.mauck@${props.companyEmailDomain}`;
  const subject = "CLEANUP ON AISLE 14";
  return (
    <Screen id={id}>
      <Line>FROM....... {from}</Line>
      <Line>TO......... [REDACTED]</Line>
      <Line>SUBJECT.... {subject}</Line>
      <Br />
      <P>
        Hey friendo &mdash; by the time you get this you should be just about to
        touch down on that {props.stationName} rock. I need your help.
      </P>
      <P>
        You might&apos;ve already heard a rumor that some folks on our team have
        been involved in a bit of light drug smuggling. Well, the suits are
        starting to sniff around looking for who it is and obviously it&apos;d
        be better for us all if we deal with it before the suits find them. I
        don&apos;t know exactly who all is involved, but I did track down{" "}
        {props.stationName} as the place where they&apos;re clearing the shit
        through on supply runs like yours. My ol&apos; pal Mike there seems to
        know more than he was willing to tell me &mdash; but he is too damned
        dumb to be doing this all on his lonesome. Lean on him to start with and
        see if he cracks.
      </P>
      <P>
        If you find out who it is, either convince them to destroy the narcotics
        before it gets found or do it yourself. I think I can pull together
        Cr.5k from the other teamsters if you get this done before the suits
        come down hard on all of us. These idiots were probably just trying to
        make a buck to feed their families. I wish we could scrape together
        more, but I&apos;m glad I can rely on you for shit like this. I can...
        right?
      </P>
      <P>Qiana</P>
      <P>
        P.S. Shit I shouldn&apos;t even bring this up but you&apos;ve always
        done right by me. Look &mdash; if you can get the stuff off{" "}
        {props.stationName} and over to Prospero&apos;s Dream you could make a
        killing. Waaay more than Cr.5k, but it is your ass if you get caught. I
        suggest you just destroy it and come on back... but if you do go this
        route, do me a favor and give Mike a ride too will ya? I owe him one.
      </P>
    </Screen>
  );
};

const retval: IAgenda = { Agenda, id, title };
export default retval;
