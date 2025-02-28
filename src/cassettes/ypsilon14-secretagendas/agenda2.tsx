import { P } from "@/components/CathodeRay";
import { Screen, Line, Br } from "@/components/CathodeRay/Core";
import type { IAgenda, IAgendaProps } from "./agenda";

const id = "agenda2";
const title = "Recover Research (Android)";

const Agenda = (props: IAgendaProps) => {
  const from = `g.tyrell@${props.companyEmailDomain}`;
  const subject = "0101100100101101 0011000100110100";
  return (
    <Screen id={id}>
      <Line>FROM....... {from}</Line>
      <Line>TO......... [REDACTED]</Line>
      <Line>SUBJECT.... {subject}</Line>
      <Br />
      <Line>ALTERATION TO MISSION OBJECTIVES DOWNLOADED</Line>
      <P>FIRMWARE UPDATING...</P>
      <Line>
        &bull; MAINTAIN ORIGINAL OBJECTIVES ABOARD {props.playerShipName}
      </Line>
      <Line>&bull; ADDITIONAL OBJECTIVES PROCESSED:</Line>
      <Line>
        ... &bull; OBTAIN DR. GIOVANI&apos;S RESEARCH ABOUT{" "}
        {props.stationName.toUpperCase()} AT ANY COST
      </Line>
      <Line>
        ... &bull; RETURN DR. GIOVANI&apos;S RESEARCH TO OUR LAB FOR FURTHER
        ANALYSIS
      </Line>
      <Line>
        ... &bull; ENSURE SAFETY OF {props.stationName.toUpperCase()} PERSONNEL;
        THEY ARE NEEDED FOR QUESTIONNING
      </Line>
      <Line>... &bull; MAINTAIN COVER</Line>
      <Br />
      <Line>AUTHORIZATION NAME:</Line>
      <P>GEORGIANN TYRELL</P>
      <Line>AUTHORIZATION CODE:</Line>
      <P>GT729FHFT/A1</P>
    </Screen>
  );
};

const retval: IAgenda = { Agenda, id, title };
export default retval;
