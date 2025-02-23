import { PropsWithChildren } from "react";
import {
  Cassette,
  Screen,
  Line,
  Br,
  Link,
  Bitmap,
  Dialog,
  Wrapper,
} from "@/cassette-jsx";

import logo from "./dyson-phytology.png";
import murandal from "./murandal.png";
import orbitalSchematic from "./orbital-schematic.png";
import orbitalSecurity from "./orbital-security.png";
import groundSchematic from "./ground-schematic.png";
import underwaterSchematic from "./underwater-schematic.png";
import underwaterSecurity from "./underwater-security.png";

const names = {
  station: "Choi Output",
  playerShip: "Tempest",
};

function repeatString(str: string, num: number) {
  return new Array(num + 1).join(str);
}

const Header = ({ label }: { label: string }) => {
  return (
    <Wrapper>
      <Line>{label.toUpperCase()}</Line>
      <Line>{repeatString("=", label.length)}</Line>
      <Br />
    </Wrapper>
  );
};

const P = ({ children }: PropsWithChildren) => {
  return (
    <Wrapper>
      <Line>{children}</Line>
      <Br />
    </Wrapper>
  );
};

const Back = ({
  label = "Back",
  target,
}: {
  label?: string;
  target: string;
}) => {
  return (
    <Wrapper>
      <Br />
      <Line>==========</Line>
      <Br />
      <Link target={target}>&lt; {label.toUpperCase()}</Link>
    </Wrapper>
  );
};

type TLockedLinkProps = {
  ifLockedTarget?: string;
  ifLockedTargetType?: "dialog" | "link";
  hackable?: boolean;
  type: "link" | "dialog";
  target: string;
};
const LockedLink = ({
  children,
  ifLockedTarget = "lockedDialog",
  ifLockedTargetType = "dialog",
  hackable = false,
  target,
  type,
}: PropsWithChildren<TLockedLinkProps>) => {
  return hackable ? (
    <Link
      target={[
        {
          target: ifLockedTarget,
          type: ifLockedTargetType,
          shiftKey: false,
        },
        {
          target,
          type,
          shiftKey: true,
        },
      ]}
    >
      {children}
    </Link>
  ) : (
    <Link
      target={[
        {
          target: ifLockedTarget,
          type: ifLockedTargetType,
          shiftKey: false,
        },
      ]}
    >
      {children}
    </Link>
  );
};

const Home = () => {
  return (
    <Screen id="home">
      <Header label={`${names.station} Access Terminal`} />
      <Bitmap src={logo.src} style="transparent-bg" />
      <Line>DYSON PHYTOLOGY&copy;</Line>
      <P>THE FOREFRONT OF NATURAL CARE&trade;</P>
      <P>==========================</P>
      <P>Welcome to {names.station}.</P>
      <P>==========================</P>
      <Link target="menu">&gt; ACCEPT EULA &amp; LOG IN</Link>
    </Screen>
  );
};

const MainMenu = () => {
  return (
    <Screen id="menu">
      <Header label="Main Menu" />
      <P>[A] :: Authorized access only</P>
      <Link target="facility">&gt; FACILITY TERMINALS</Link>
      <LockedLink hackable={true} target="comms" type="link">
        &gt; OUTPOST COMMS [A]
      </LockedLink>
      <Link target="planet">&gt; PLANET INFO</Link>
    </Screen>
  );
};

const FacilityTerminals = () => {
  return (
    <Screen id="facility">
      <Header label="Facility Terminals" />
      <P>[A] :: Authorized access only</P>
      <LockedLink hackable={true} target="orbital" type="link">
        &gt; DELANGE ORBITAL STATION [A]
      </LockedLink>
      <LockedLink hackable={true} target="ground" type="link">
        &gt; JAPLINE&apos;s ACHE GROUND HABITATION [A]
      </LockedLink>
      <LockedLink hackable={true} target="underwater" type="link">
        &gt; CHOI UNDERWATER LABS [A]
      </LockedLink>
      <Back target="menu" />
    </Screen>
  );
};

const Orbital = () => {
  return (
    <Screen id="orbital">
      <Header label="Delange Access Terminal" />
      <Link target="orbitalschematic">&gt; FACILITY SCHEMATIC</Link>
      <Link target="orbitalsecurity">&gt; SECURITY FEEDS</Link>
      <Link target="orbitalpersonnel">&gt; PERSONNEL</Link>
      <Link target="orbitaldiagnostics">&gt; DIAGNOSTICS</Link>
      <Link target="orbitaldocks">&gt; DOCK ACTIVITY</Link>
      <Link target="orbitalcargo">&gt; CARGO REGISTRY</Link>
      <Back target="facility" />
    </Screen>
  );
};
const OrbitalSchematic = () => {
  return (
    <Screen id="orbitalschematic">
      <Header label="Delange Orbital Schematic" />
      <Bitmap src={orbitalSchematic.src} />
      <Br />
      <Line>A copy of the map is now available via data tablet.</Line>
      <Back target="orbital" />
    </Screen>
  );
};
const OrbitalSecurity = () => {
  return (
    <Screen id="orbitalsecurity">
      <Header label="Security Feeds" />
      <Bitmap src={orbitalSecurity.src} />
      <Back target="orbital" />
    </Screen>
  );
};
const OrbitalPersonnel = () => {
  return (
    <Screen id="orbitalpersonnel">
      <Header label="Personnel" />
      <Line>01. SINGH, Ashraf :: Delange Admin</Line>
      <Line>02. CHATZKEL, Jerome :: Security</Line>
      <Line>03. TOBIN, Rosa :: Engineer</Line>
      <Back target="orbital" />
    </Screen>
  );
};
const OrbitalDiagnostics = () => {
  return (
    <Screen id="orbitaldiagnostics">
      <Header label="Diagnostics" />
      <Line>Checking structural integrity.............. OK.</Line>
      <Line>Checking power............................. OK.</Line>
      <Line>Checking life support...................... OK.</Line>
      <Line>Checking main systems...................... OK.</Line>
      <Br />
      <Line style="alert">
        WARNING: Airflow 79.6%. Check Maintenance Exit air conduits for
        blockage.
      </Line>
      <Line style="alert">
        WARNING: Air particles at 140%. Air filter replacement required.
      </Line>
      <Br />
      <Line>NOTICE: Air filters replaced 31 day(s) ago.</Line>
      <Line>NOTICE: Air conduits maintained 31 day(s) ago.</Line>
      <Br />
      <Line>=============</Line>
      <Br />
      <Line>SUMMARY:</Line>
      <Line>All systems operating within acceptible parameters.</Line>
      <Back target="orbital" />
    </Screen>
  );
};
const OrbitalDocks = () => {
  return (
    <Screen id="orbitaldocks">
      <Header label="Dock Activity" />
      <P>Docking bay activity (past 6 months):</P>
      <Line>2366-04-28.0633 - Bay 1 : Arrive :: Tempest</Line>
      <Line>2366-04-29.0834 - Bay 1 : Depart :: Tempest</Line>
      <Line>2366-06-19.1223 - Bay 1 : Arrive :: Tempest</Line>
      <Line>2366-06-20.1604 - Bay 1 : Depart :: Tempest</Line>
      <Line>2366-08-23.1004 - Bay 1 : Arrive :: Tempest</Line>
      <Back target="orbital" />
    </Screen>
  );
};
const OrbitalCargo = () => {
  return (
    <Screen id="orbitalcargo">
      <Header label="Cargo Registry" />
      <P>Files available: 0</P>
      <Line>Last scheduled data purge was on: 2366-08-20.1000</Line>
      <Back target="orbital" />
    </Screen>
  );
};

const Ground = () => {
  return (
    <Screen id="ground">
      <Header label="Japline Access Terminal" />
      <Link target="groundschematic">&gt; FACILITY SCHEMATIC</Link>
      <Link target="groundadministration">&gt; ADMINISTRATION</Link>
      <Link target="groundhotel">&gt; HOTEL</Link>
      <Link target="groundgreenhouse">&gt; GREENHOUSE</Link>
      <Link target="groundgarage">&gt; GARAGE</Link>
      <Link target="groundpersonnel">&gt; PERSONNEL</Link>
      <Back target="facility" />
    </Screen>
  );
};
const GroundSchematic = () => {
  return (
    <Screen id="groundschematic">
      <Header label="Japline Ground Habitation Schematic" />
      <Bitmap src={groundSchematic.src} />
      <Br />
      <Line>A copy of the map is now available via data tablet.</Line>
      <Back target="ground" />
    </Screen>
  );
};
const GroundAdmin = () => {
  return (
    <Screen id="groundadministration">
      <Header label="Administration" />
      <Line>Checking orbital transport.............. OK.</Line>
      <Line>Checking water levels................... OK.</Line>
      <Line>Checking power.......................... OK.</Line>
      <Line>Checking food stocks.................... OK.</Line>
      <Line>Checking Choi access lift............... OK.</Line>
      <Line>Checking main systems................... OK.</Line>
      <Br />
      <Header label="Personnel Health" />
      <Line>Active: 0</Line>
      <Line>Health Issues: 0</Line>
      <Line>Critial Issues: 20</Line>
      <Line>Diseased: 34</Line>
      <Br />
      <Line style="alert">WARNING: 35 personnel not detected.</Line>
      <Line style="alert">
        WARNING: Labor levels below the recommended levels.
      </Line>
      <Br />
      <Header label="Summary" />
      <Line>All systems operating within acceptable levels.</Line>
      <Line style="alert">
        Outpost severely understaffed. Please contact DYSON PHYTOLOGY&copy;
        Human Resources Department.
      </Line>
      <Back target="ground" />
    </Screen>
  );
};
const GroundHotel = () => {
  return (
    <Screen id="groundhotel">
      <Header label="Hotel" />
      <Line>Checking vacancies...................... 100% availability.</Line>
      <Line>Checking main systems................... OK.</Line>
      <Br />
      <Line style="alert">
        WARNING: Unable to regulation temperature. Please call maintenance.
      </Line>
      <Line style="alert">
        WARNING: Air particles at 240%. Air filter replacement required.
      </Line>
      <Br />
      <Line>NOTICE: Air filters replaced 31 day(s) ago.</Line>
      <Line>NOTICE: Air conduits maintained 31 day(s) ago.</Line>
      <Br />
      <Header label="Summary" />
      <Line>Maintenance required.</Line>
      <Back target="ground" />
    </Screen>
  );
};
const GroundGreenhouse = () => {
  return (
    <Screen id="groundgreenhouse">
      <Header label="Greenhouse" />
      <Line>Checking temp........................... OK.</Line>
      <Line>Checking humidity....................... OK.</Line>
      <Line>Checking irrigation..................... OK.</Line>
      <Line>Checking nutrient supply................ OK.</Line>
      <Line>Checking main systems................... OK.</Line>
      <Br />
      <Line>
        NOTICE: 3% of available space not used. Recheck optimization procedures.
      </Line>
      <Br />
      <Header label="Summary" />
      <Line>All systems operating within acceptable levels.</Line>
      <Back target="ground" />
    </Screen>
  );
};
const GroundGarage = () => {
  return (
    <Screen id="groundgarage">
      <Header label="Garage" />
      <Line>Checking vehicle........................ Present.</Line>
      <Line>Checking main systems................... OK.</Line>
      <Br />
      <Header label="Available Equipment" />
      <Line>* Surveillance Equipment</Line>
      <Line>* Vehicle Batteries</Line>
      <Line>* Vehicle Spart Parts</Line>
      <Br />
      <Line style="alert">WARNING: Vehicle battery depleted.</Line>
      <Br />
      <Header label="Summary" />
      <Line>All systems operating within acceptable levels.</Line>
      <Back target="ground" />
    </Screen>
  );
};
const GroundPersonnel = () => {
  return (
    <Screen id="groundpersonnel">
      <Header label="Personnel" />
      <Line>01. BALE, Reymond :: Japline Admin</Line>
      <Line>02. LEWARDS, JAMIE :: Scientist</Line>
      <Line>03. JACKSON, Lilley :: Engineer</Line>
      <Line>04. ROBELL, Randy :: Scientist</Line>
      <Line>05. BENNEZ, Micha :: Engineer</Line>
      <Line>06. SONEZ, Lice :: Engineer</Line>
      <Line>07. CAMPBUTL, Lilley :: Engineer</Line>
      <Line>08. MITCHY, Rancia :: Scientist</Line>
      <Line>09. WARTE, Brankeith :: Security</Line>
      <Line>10. JAMITH, Pamy :: Scientist</Line>
      <Line>11. WATSON, Beccia :: Engineer</Line>
      <Line>12. REZAL, Terry :: Scientist</Line>
      <Back target="ground" />
    </Screen>
  );
};

const Underwater = () => {
  return (
    <Screen id="underwater">
      <Header label="Choi Access Terminal" />
      <Link target="underwaterschematic">&gt; FACILITY SCHEMATIC</Link>
      <Link target="underwatersecurity">&gt; SECURITY FEEDS</Link>
      <Link target="underwaterpersonnel">&gt; PERSONNEL</Link>
      <Link target="underwaterdiagnostics">&gt; DIAGNOSTICS</Link>
      <Link target="underwaterairlock">&gt; AIRLOCK STATUS</Link>
      <Link target="underwaterequipment">&gt; EQUIPMENT STOCKS</Link>
      <Link target={{ target: "upload-error", type: "dialog" }}>
        &gt; UPLOAD ORBITAL DATA DUMP
      </Link>
      <Back target="facility" />
    </Screen>
  );
};
const UnderwaterSchematic = () => {
  return (
    <Screen id="underwaterschematic">
      <Header label="Choi Lab Schematic" />
      <Bitmap src={underwaterSchematic.src} />
      <Br />
      <Line>A copy of the map is now available via data tablet.</Line>
      <Back target="underwater" />
    </Screen>
  );
};
const UnderwaterSecurity = () => {
  return (
    <Screen id="underwatersecurity">
      <Header label="Security Feeds" />
      <Bitmap src={underwaterSecurity.src} />
      <Back target="underwater" />
    </Screen>
  );
};
const UnderwaterPersonnel = () => {
  return (
    <Screen id="underwaterpersonnel">
      <Header label="Personnel" />
      <Line>01.TAIBHSE, Eunha :: Choi Lab Admin</Line>
      <Line>02.ALES, Bever :: Engineer</Line>
      <Line>03.ROBERTS, Jacquel :: Scientist</Line>
      <Line>04.BENNEZ, Bever :: Scientist</Line>
      <Line>05.BAKER, Lilley :: Engineer</Line>
      <Line>06.MITHY, Lice :: Engineer</Line>
      <Line>07.LESON, Jacquel :: Scientist</Line>
      <Line>08.REZAL, Rice :: Security</Line>
      <Line>09.ROBERTS, Ruan :: Security</Line>
      <Line>10.GUEZAL, Donna :: Scientist</Line>
      <Line>11.DAVER, Terry :: Scientist</Line>
      <Line>12.JAMITH, Nathua :: Scientist</Line>
      <Line>13.BAKER, Katha :: Scientist</Line>
      <Line>14.LEWARDS, Hene :: Security</Line>
      <Line>15.ROBELL, Beverl :: Scientist</Line>
      <Line>16.TAYLY, Katha :: Scientist</Line>
      <Line>17.CARTE, Terry :: Scientist</Line>
      <Line>18.ROBELL, Juany :: Scientist</Line>
      <Line>19.GUEZAL, Lice :: Engineer</Line>
      <Line>20.TAYLY, Juany :: Scientist</Line>
      <Line>21.WATSON, Rilia :: Scientist</Line>
      <Line>22.REZAL, Kimby :: Scientist</Line>
      <Line>23.BENNEZ, Donna :: Scientist</Line>
      <Line>24.MITCHY, Jane :: Scientist</Line>
      <Line>25.GRIGHTE, Lilley :: Engineer</Line>
      <Line>26.BARNAND, Rancia :: Scientist</Line>
      <Line>27.BARNAND, Riley :: Engineer</Line>
      <Line>28.LEWARDS, Jane :: Scientist</Line>
      <Line>29.REZAL, Beccia :: Engineer</Line>
      <Line>30.GRIGHTE, Wardy :: Security</Line>
      <Line>31.DERSON, Miny :: Scientist</Line>
      <Line>32.BAKER, Juany :: Scientist</Line>
      <Line>33.MAZAL, Pamy :: Scientist</Line>
      <Line>34.MASON, Altes :: Engineer</Line>
      <Line>35.JAMITH, Juane :: Security</Line>
      <Line>36.HENDERS, Clane :: Scientist</Line>
      <Line>37.WARTE, Beccia :: Engineer</Line>
      <Line>38.SONEZ, Rice :: Security</Line>
      <Line>39.SONEZ, Jamy :: Scientist</Line>
      <Line>40.MITCHY, Lice :: Engineer</Line>
      <Line>41.NEZAL, Jane :: Scientist</Line>
      <Line>42.ARTIN, Brankeith :: Security</Line>
      <Line>43.WATSON, Jane :: Scientist</Line>
      <Line>44.TERSON, Juane :: Security</Line>
      <Line>45.CAMPBUTL, Tine :: Engineer</Line>
      <Line>46.HENDERS, Jacquel :: Scientist</Line>
      <Line>47.MITHY, Miny :: Scientist</Line>
      <Line>48.HELLEY, Tine :: Engineer</Line>
      <Line>49.ROBELL, Risa :: Scientist</Line>
      <Line>50.CARTE, Lice :: Engineer</Line>
      <Line>51.DERSON, Kimberly :: Engineer</Line>
      <Line>52.ARTIN, Tine :: Engineer</Line>
      <Line>53.GUEZAL, Carly :: Engineer</Line>
      <Line>54.COLEE, Wardy :: Security</Line>
      <Line>55.TAYLY, Randy :: Scientist</Line>
      <Line>56.BAKER, Ruan :: Security</Line>
      <Line>57.COLEE, Jacquel :: Scientist</Line>
      <Line>58.LESON, Rilia :: Scientist</Line>
      <Line>59.ROBELL, Nety :: Scientist</Line>
      <Line>60.DERSON, Netia :: Engineer</Line>
      <Line>61.MASON, Nathua :: Scientist</Line>
      <Line>62.BAKER, Rilia :: Scientist</Line>
      <Line>63.CARTE, Jamie :: Scientist</Line>
      <Line>64.JACKSON, Brankeith :: Security</Line>
      <Line>65.SONEZ, Jane :: Scientist</Line>
      <Line>66.MITHY, Bever :: Scientist</Line>
      <Line>67.ROBELL, Tine :: Engineer</Line>
      <Line>68.ROBELL, Arymo :: Scientist</Line>
      <Line>69.TAYLY, Randy :: Scientist</Line>
      <Line>70.JACKSON, Jamie :: Scientist</Line>
      <Line>71.BAKER, Donna :: Scientist</Line>
      <Line>72.REZAL, Clane :: Scientist</Line>
      <Line>73.GRIGHTE, Juane :: Security</Line>
      <Back target="underwater" />
    </Screen>
  );
};
const UnderwaterDiagnostics = () => {
  return (
    <Screen id="underwaterdiagnostics">
      <Header label="Diagnostics" />
      <Line>Checking structural integrity........... OK.</Line>
      <Line>Checking containment protocols.......... OK.</Line>
      <Line>Checking power.......................... OK.</Line>
      <Line>Checking life support................... OK.</Line>
      <Line>Checking cooling systems................ OK.</Line>
      <Line>Checking main systems................... OK.</Line>
      <Line>Checking lift........................... OK.</Line>
      <Br />
      <Header label="General" />
      <Line style="alert">WARNING: Temperature at 37 degrees.</Line>
      <Line style="alert">
        WARNING: Temperature rising. System overheat imminent..
      </Line>
      <Line style="alert">WARNING: Air particles at 150%.</Line>
      <Line style="alert">WARNING: Humidity at 98%.</Line>
      <Br />
      <Header label="Crossroad" />
      <Line style="alert">
        WARNING: Structural stress at ORANGE levels. Multiple leaks detected.
      </Line>
      <Br />
      <Header label="Laboratories" />
      <Line style="alert">
        WARNING: Structural stress at RED levels. Breach detected.
      </Line>
      <Line style="alert">WARNING: Section flooded.</Line>
      <Line style="alert">WARNING: Section sealed.</Line>
      <Line>
        NOTICE: Pumps operating. Unable to counteract water intake rate.
      </Line>
      <Br />
      <Header label="Maintenance" />
      <Line style="alert">
        WARNING: Structural stress at ORANGE levels. Multiple leaks detected.
      </Line>
      <Line style="alert">WARNING: Section partially flooded.</Line>
      <Line>NOTICE: Pumps successfully counteracting water intake rate.</Line>
      <Line>NOTICE: Main sewage filter [M1] clogged.</Line>
      <Br />
      <Header label="Habitation" />
      <Line style="alert">WARNING: Air particles at 290%.</Line>
      <Line style="alert">URGENT: Filter replacement needed.</Line>
      <Line>NOTICE: Air filters replaced 6 day(s) ago.</Line>
      <Line>NOTICE: Air conduits maintained 6 day(s) ago.</Line>
      <Br />
      <Header label="Storage" />
      <Line>NOTICE: Stock registry system down.</Line>
      <Br />
      <Header label="Summary" />
      <Line style="alert">
        Facility status CRITICAL. Please evacuate and contact DYSON
        PHYTOLOGY&copy; Facility Maintenance Department.
      </Line>
      <Back target="underwater" />
    </Screen>
  );
};
const UnderwaterAirlock = () => {
  return (
    <Screen id="underwaterairlock">
      <Header label="Airlock Status" />
      <Line>Scanning sea access airlock status</Line>
      <Line>..................................</Line>
      <Line>..............................</Line>
      <Br />
      <Line>Checking structural integrity........... OK.</Line>
      <Line>AIRLOCK GODIVA [MAINTENANCE]............ ERROR.</Line>
      <Line>AIRLOCK RUEBEN [LABORATORIES]........... OK.</Line>
      <Line>AIRLOCK NORTH [MAINTENANCE]............. OK.</Line>
      <Line>AIRLOCK SAMUEL [LABORATORIES]........... OK.</Line>
      <Br />
      <Line style="alert">
        WARNING: Airlock GODIVA equipment not in registered storage spaces.
      </Line>
      <Back target="underwater" />
    </Screen>
  );
};
const UnderwaterEquipment = () => {
  return (
    <Screen id="underwaterequipment">
      <Header label="Equipment Stocks" />
      <Line>Checking laboratory storage............. ERROR.</Line>
      <Line>--- General Contents: chemicals, flammables</Line>
      <Br />
      <Line>Checking general storage................ ERROR.</Line>
      <Line>--- General Contents: food, drinks, maintenance equipment</Line>
      <Br />
      <Line>Checking airlocks....................... OK.</Line>
      <Line style="alert">--- GODIVA: Equipment not in registered spaces</Line>
      <Line>--- RUEBEN: 4 aqua vacc suits, sampling equipment, 4-seat sub</Line>
      <Line>--- NORTH: 2 aqua vacc suits, repair equipment, 2x 1-seat sub</Line>
      <Line>--- SAMUEL: 2 aqua vacc suits, sampling equipment</Line>
      <Br />
      <Back target="underwater" />
    </Screen>
  );
};
const UnderwaterUpload = () => {
  return (
    <Screen id="underwaterupload">
      <Header label="Security Feeds" />
      <Back target="underwater" />
    </Screen>
  );
};

const Comms = () => {
  return (
    <Screen id="comms">
      <Header label="Outpost Comms" />
      <Link target="commsplayership">
        &gt; HAIL {names.playerShip.toUpperCase()}
      </Link>
      <Link target="commsmessages">&gt; MESSAGES</Link>
      <Back target="menu" />
    </Screen>
  );
};
const CommsPlayerShip = () => {
  return (
    <Screen id="commsplayership">
      <Header label="Transmitting" />
      <Line>..........................................</Line>
      <Line>..........................................</Line>
      <Br />
      <Line>
        COMMUNICATION CHANNEL OPENED WITH {names.playerShip.toUpperCase()}
      </Line>
      <Back target="comms" label="Close Channel" />
    </Screen>
  );
};
const CommsMessages = () => {
  return (
    <Screen id="commsmessages">
      <Header label="Messages" />
      <P>Authorized messages registered last month: 2</P>
      <Link target="commsmessage1">&gt; 2366-08-15.0915</Link>
      <Link target="commsmessage2">&gt; 2366-08-11.0804</Link>
      <Br />
      <P>Unauthorized messages declined or purged last month:</P>
      <Line>2366-08-16: 4</Line>
      <Line>2366-08-17: 55</Line>
      <Line>2366-08-18: 157</Line>
      <Line>2366-08-19: 2</Line>
      <Line>2366-08-20: 1</Line>
      <Back target="comms" />
    </Screen>
  );
};
const CommsMessage1 = () => {
  return (
    <Screen id="commsmessage1">
      <P>DATE: 2366-08-15.0915</P>
      <Line>FROM: Dr. Eunha Taibhse</Line>
      <P>TO: Asraf Singh, Reymond Bale</P>
      <P>SUBJECT: Containment Failure</P>
      <P>=====</P>
      <P>Hello all,</P>
      <P>
        It seems our mole compromised some of our safety protocols during his
        espionage attempt.
      </P>
      <P>
        We detected a small outbreak but action was swift and containment
        secured. Additional strict measures have also been taken to prevent such
        instances in the future.
      </P>
      <P>I believe the matter resolved now.</P>
      <Line>Best regards,</Line>
      <Line>Dr. Eunha Taibhse, Choi Lab Admin</Line>
      <Back target="commsmessages" />
    </Screen>
  );
};
const CommsMessage2 = () => {
  return (
    <Screen id="commsmessage2">
      <P>DATE: 2366-08-11.0804</P>
      <Line>FROM: Dr. Eunha Taibhse</Line>
      <P>TO: Asraf Singh, Reymond Bale</P>
      <P>SUBJECT: Mole</P>
      <P>=====</P>
      <P>Hello all,</P>
      <P>
        It seems a corporate spy managed to bypass company security protocols.
        The mole has been apprehended as he was trying to leave Choi Labs with
        sensitive data. The has been dealt with and no further action is
        required.
      </P>
      <Line>Best regards,</Line>
      <Line>Dr. Eunha Taibhse, Choi Lab Admin</Line>
      <Back target="commsmessages" />
    </Screen>
  );
};

const Planet = () => {
  return (
    <Screen id="planet">
      <Header label="Planet Info" />
      <Bitmap src={murandal.src} />
      <Br />
      <P>SYSTEM................. Acherol</P>
      <P>SUN TYPE............... Red Dwarf</P>
      <P>PLANET NAME............ Murandal</P>
      <P>PLANET TYPE............ Ice Planet</P>
      <P>DISTANCE FROM STAR..... 14 AU</P>
      <Line>DESCRIPTION:</Line>
      <P>
        The majority of the planet is covered by thick ice caps, and a somewhat
        alkaline ocean below. Ice particles cover almost everything with time if
        left unattended. The ice sheets covering the planet around 1km / 0.6
        miles thick, and the ocean below is both pitch black and freezing at
        around -4°C / 25°F. The water is filled with large quantities of
        reflective detritus picked up from the ocean floor, a black, flaky
        expanse.
      </P>
      <P>DIAMETER............... 13,000 km / 8,080 miles</P>
      <P>GRAVITY................ 1.01g</P>
      <Line>ATMOSPHERE:</Line>
      <P>
        Breathable. High concentration of crystal particles. Long-term exposure
        not advised.
      </P>
      <Line>WEATHER:</Line>
      <P>Heavy cloud cover. High chance of sleet fall.</P>
      <Line>SURFACE ECOLOGY:</Line>
      <P>Minimal (Bacteria)</P>
      <Line>OCEAN ECOLOGY:</Line>
      <Line>Limited (algae, plants, crab-analogues)</Line>
      <Back target="menu" />
    </Screen>
  );
};

const UploadErrorDialog = () => {
  return (
    <Dialog id="upload-error" style="alert">
      <Line>
        Error! Please use Data Comms in Laboratories section for upload.
      </Line>
    </Dialog>
  );
};

const LockedDialog = () => {
  return (
    <Dialog id="lockedDialog" style="alert">
      <Line>ERROR! Authorization required.</Line>
    </Dialog>
  );
};

export default function Ypsilon14() {
  return (
    <Cassette
      name="002 Bloom"
      title={`${names.station} Access Terminal`}
      author="@gparali"
      website="https://github.com/gparali/gparali.github.io"
    >
      <Home />
      <MainMenu />
      <FacilityTerminals />
      <Planet />

      <Orbital />
      <OrbitalSchematic />
      <OrbitalSecurity />
      <OrbitalPersonnel />
      <OrbitalDiagnostics />
      <OrbitalDocks />
      <OrbitalCargo />

      <Ground />
      <GroundSchematic />
      <GroundAdmin />
      <GroundHotel />
      <GroundGreenhouse />
      <GroundGarage />
      <GroundPersonnel />

      <Underwater />
      <UnderwaterSchematic />
      <UnderwaterSecurity />
      <UnderwaterPersonnel />
      <UnderwaterDiagnostics />
      <UnderwaterAirlock />
      <UnderwaterEquipment />
      <UnderwaterUpload />

      <Comms />
      <CommsPlayerShip />
      <CommsMessages />
      <CommsMessage1 />
      <CommsMessage2 />

      <UploadErrorDialog />
      <LockedDialog />
    </Cassette>
  );
}
