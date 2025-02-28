import { Header } from "@/components/CathodeRay";
import { Cassette, Screen, Link } from "@/components/CathodeRay/Core";

import { IAgendaProps } from "./agenda";
import Agenda1 from "./agenda1";
import Agenda2 from "./agenda2";
import Agenda3 from "./agenda3";
import Agenda4 from "./agenda4";
import Agenda5 from "./agenda5";
import Agenda6 from "./agenda6";
import Agenda7 from "./agenda7";
import Agenda8 from "./agenda8";
import AbsenceNick from "./abscence-nick";

const constants: IAgendaProps = {
  stationName: "Ypsilon-14",
  companyName: "Ishiyama Dynamics",
  companyEmailDomain: "ishiyama.gal",
  playerShipName: "CTS Tempest",
};

export default function CassetteComponent() {
  return (
    <Cassette
      name="002 The Haunting of Ypsilon-14 (Secret Agendas)"
      title="Message Terminal"
      author="/u/guythepie"
      website="https://www.reddit.com/r/mothershiprpg/comments/10lxjhx/running_the_haunting_of_ypsilon14_for_my_group/"
    >
      <Screen id="menu">
        <Header label="Ypsilon-14: Secret Agendas" />
        <Link target={Agenda1.id}>01. {Agenda1.title}</Link>
        <Link target={Agenda2.id}>02. {Agenda2.title}</Link>
        <Link target={Agenda3.id}>03. {Agenda3.title}</Link>
        <Link target={Agenda4.id}>04. {Agenda4.title}</Link>
        <Link target={Agenda5.id}>05. {Agenda5.title}</Link>
        <Link target={Agenda6.id}>06. {Agenda6.title}</Link>
        <Link target={Agenda7.id}>07. {Agenda7.title}</Link>
        <Link target={Agenda8.id}>08. {Agenda8.title}</Link>
        <Link target={AbsenceNick.id}>99. {AbsenceNick.title}</Link>
      </Screen>
      <Agenda1.Agenda {...constants} />;
      <Agenda2.Agenda {...constants} />
      <Agenda3.Agenda {...constants} />
      <Agenda4.Agenda {...constants} />
      <Agenda5.Agenda {...constants} />
      <Agenda6.Agenda {...constants} />
      <Agenda7.Agenda {...constants} />
      <Agenda8.Agenda {...constants} />
      <AbsenceNick.Agenda {...constants} />
    </Cassette>
  );
}
