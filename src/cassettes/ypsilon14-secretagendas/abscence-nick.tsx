import { P } from "@/components/CathodeRay";
import { Screen, Line, Br, Bitmap } from "@/components/CathodeRay/Core";
import type { IAgenda, IAgendaProps } from "./agenda";

import getwell from "./getwell.png";

const id = "abscence-nick";
const title = "Player Absence: Nick";

const Agenda = (props: IAgendaProps) => {
  const from = `warden@${props.companyEmailDomain}`;
  const subject = `RE: PTO REQUEST`;
  return (
    <Screen id={id}>
      <Line>FROM....... {from}</Line>
      <Line>TO......... nick.m@{props.companyEmailDomain}</Line>
      <Line>SUBJECT.... {subject}</Line>
      <Br />
      <P>Crew member Nick:</P>
      <P>
        {props.playerShipName}&apos;s onboard medical analysis systems have
        confirmed that your current health status poses an unreasonable risk to
        the mission. Please return to cryo statis; we will instruct the crew to
        perform their duties without you.
      </P>
      <P>Your PTO balance and pay have been docked correspondingly.</P>
      <Line>Warden</Line>
      <P>{props.companyEmailDomain}&copy; Human Resources</P>
      <Bitmap src={getwell.src} style="color-dodge" />
    </Screen>
  );
};

const retval: IAgenda = { Agenda, id, title };
export default retval;
