import {
  Header,
  Next,
  Back,
  LockedLink,
  P,
  Map,
  LockedDialog,
  Roster,
  Flip,
  DialogLink,
  PasswordRedirect,
  Loading,
  Timeline,
} from "@/components/CathodeRay";
import {
  Cassette,
  Screen,
  Line,
  Br,
  Link,
  Dialog,
} from "@/components/CathodeRay/Core";

import map from "@/cassettes/ypsilon14/ypsilon14-map.png";

const password = "chapman"; // hat tip to the author of the Haunting of Ypsilon-14: D. G. Chapman
const today = new Date(2366, 6, 2);
const names = {
  station: "Ypsilon-14",
  corp: "Ishiyama Dynamics",
  playerShip: "CTV Tempest",
  roster: {
    sonya: "VERHOEVEN, Sonya :: Team Leader",
    ashraf: "SINGH, Ashraf :: Breaker",
    dana: "DE BEERS, Dana :: Head Driller",
    jerome: "CHATZKEL, Jerome :: Asst. Driller",
    kantaro: "KENJIE, Kantaro :: Loader",
    morgan: "BOWE, Morgan :: Loader",
    rie: "NEKTARIOS, Rie :: Putter",
    rosa: "TOBIN, Rosa :: Mining Engineer",
    mike: "RADIMIR, Mike :: Mining Engineer",
    unused: "UNUSED :: N/A",
  },
};

const Y14Home = () => {
  return (
    <Screen id="home">
      <Header label={names.station} />
      <Line>
        Welcome to the {names.station} Mining Station, a property of
        {names.corp.toUpperCase()}&copy;, where innovation is our top
        priority&trade;.
      </Line>
      <Next target="menu" label="ACCEPT EULA & LOGIN" />
    </Screen>
  );
};

const Y14Menu = () => {
  return (
    <Screen id="menu">
      <Header label="Main Menu" />
      <Link target="schematic">&gt; STATION SCHEMATIC</Link>
      <Link target="diagnostics">&gt; DIAGNOSTICS</Link>
      <Link target="schedule">&gt; SCHEDULE</Link>
      <Link target="roster">&gt; ROSTER</Link>
      <Link target="comms">&gt; COMMS</Link>
      <Link target="controls">&gt; CONTROLS</Link>
    </Screen>
  );
};

const Y14Schematic = () => {
  return (
    <Screen id="schematic">
      <Header label="Station Schematic" />
      <Map image={map} />
      <Back target="menu" />
    </Screen>
  );
};

const Y14Diagnostics = () => {
  return (
    <Screen id="diagnostics">
      <Header label="Diagnostics" />
      <Line>Checking life support.............. OK.</Line>
      <P>Checking main systems.............. OK.</P>
      <Line style="alert">
        WARNING: Airflow 82.4%. Check vents for blockage.
      </Line>
      <P style="alert">WARNING: Shower #5 non-functional as of 1 day(s) ago.</P>
      <Line>NOTICE: Air filters replaced 143 day(s) ago.</Line>
      <P>NOTICE: Mineshaft lift maintained 455 day(s) ago.</P>
      <Line>SUMMARY:</Line>
      <Line>All systems operating within acceptible parameters.</Line>
      <Back target="menu" />
    </Screen>
  );
};

const Y14Schedule = () => {
  return (
    <Screen id="schedule">
      <Header label="Schedule" />
      <P>Docking bay activity (past 6 months):</P>
      <Timeline
        start={today}
        events={[
          [0, ["Bay 2", "Arrive", names.playerShip.toUpperCase()]],
          [28, ["Bay 1", "Arrive", "RSV HERACLES"]],
          [30, ["Bay 1", "Depart", "CTV HORN OF PLENTY"]],
          [31, ["Bay 1", "Arrive", "CTV HORN OF PLENTY"]],
          [58, ["Bay 1", "Depart", "MSV VASQUEZ XV"]],
          [59, ["Bay 1", "Arrive", "MSV VASQUEZ XV"]],
          [84, ["Bay 2", "Depart", "CTV HORN OF PLENTY"]],
          [85, ["Bay 2", "Arrive", "CTV HORN OF PLENTY"]],
          [128, ["Bay 1", "Depart", "MSV VASQUEZ XV"]],
          [129, ["Bay 1", "Arrive", "MSV VASQUEZ XV"]],
        ]}
      />
      <Back target="menu" />
    </Screen>
  );
};

const Y14Roster = () => {
  return (
    <Screen id="roster">
      <Header label="Roster" />
      <Roster
        names={[
          names.roster.sonya,
          names.roster.ashraf,
          names.roster.dana,
          names.roster.jerome,
          names.roster.kantaro,
          names.roster.morgan,
          names.roster.rie,
          names.roster.rosa,
          names.roster.mike,
          names.roster.unused,
        ]}
      />
      <Back target="menu" />
    </Screen>
  );
};

const Y14Comms = () => {
  return (
    <Screen id="comms">
      <Header label="Comms" />
      <P>2 vessels detected in proximity.</P>
      <Link target="hailplayership">
        &gt; HAIL {names.playerShip.toUpperCase()}
      </Link>
      <Link target="hailheracles">&gt; HAIL RSV HERACLES</Link>
      <Back target="menu" />
    </Screen>
  );
};

const Y14HailPlayerShip = () => {
  return (
    <Screen id="hailplayership">
      <Header label="Transmitting" />
      <Loading lines={2} />
      <Br />
      <Line>
        COMMUNICATION CHANNEL OPENED WITH {names.playerShip.toUpperCase()}
      </Line>
      <Back target="comms" label="Close Channel" />
    </Screen>
  );
};

const Y14HailHeracles = () => {
  return (
    <Screen id="hailheracles">
      <Header label="Transmitting" />
      <Loading lines={4} />
      <Br />
      <Line style="alert">NO RESPONSE FROM RSV HERACLES</Line>
      <Back target="comms" label="Close Channel" />
    </Screen>
  );
};

const Y14Controls = () => {
  return (
    <Screen id="controls">
      <Header label="Controls" />
      <Link target="showers">&gt; SHOWERS</Link>
      <Link target="greenhouse">&gt; HYDROPONICS LAB</Link>
      <LockedLink target="airlocks">&gt; AIRLOCKS [A]</LockedLink>
      <LockedLink target="system">&gt; SYSTEM [A]</LockedLink>
      <Br />
      <P>[A] :: Administrator access only</P>
      <PasswordRedirect
        password={password}
        target="controlsunlocked"
        label="Enter security code to unlock:"
      />
      <Back target="menu" />
    </Screen>
  );
};

const Y14ControlsUnlocked = () => {
  return (
    <Screen id="controlsunlocked">
      <Header label="Controls" />
      <Link target="showers">&gt; SHOWERS</Link>
      <Link target="greenhouse">&gt; HYDROPONICS LAB</Link>
      <Link target="airlocks">&gt; AIRLOCKS</Link>
      <Link target="system">&gt; SYSTEM</Link>
      <Back target="controls" />
    </Screen>
  );
};

const Y14Airlocks = () => {
  return (
    <Screen id="airlocks">
      <Header label="Airlocks" />
      <DialogLink
        dialog="airlockError"
        style="alert"
        label="&gt; DOCKING BAY 1 :: LOCKED &mdash; ERROR"
      />
      <Flip prefix="&gt; DOCKING BAY 2 :: " options={["UNLOCKED", "LOCKED"]} />
      <Flip prefix="&gt; MINE ELEVATOR :: " options={["UNLOCKED", "LOCKED"]} />
      <Back target="controlsunlocked" />
    </Screen>
  );
};

const Y14Showers = () => {
  return (
    <Screen id="showers">
      <Header label="Showers" />
      <Flip prefix="&gt; SHOWER 1 :: " options={["OFF", "ON"]} />
      <Flip prefix="&gt; SHOWER 2 :: " options={["OFF", "ON"]} />
      <Flip prefix="&gt; SHOWER 3 :: " options={["OFF", "ON"]} />
      <Flip prefix="&gt; SHOWER 4 :: " options={["OFF", "ON"]} />
      <Line style="alert">&gt; SHOWER 5 :: MALFUNCTIONING</Line>
      <Flip prefix="&gt; SHOWER 6 :: " options={["OFF", "ON"]} />
      <Back target="controls" />
    </Screen>
  );
};

const Y14Greenhouse = () => {
  return (
    <Screen id="greenhouse">
      <Header label="Hydroponics Lab" />
      <Flip prefix="&gt; MIST HYDRATION :: " options={["OFF", "ON"]} />
      <Back target="controls" />
    </Screen>
  );
};

const Y14System = () => {
  return (
    <Screen id="system">
      <Header label="System" />
      <Link target="lifesupport">&gt; LIFE SUPPORT</Link>
      <Link target="selfdestruct">&gt; SELF-DESTRUCT</Link>
      <Back target="controlsunlocked" />
    </Screen>
  );
};

const Y14LifeSupport = () => {
  return (
    <Screen id="lifesupport">
      <Header label="Life Support" />
      <P style="alert">
        WARNING: Disabling life support is a violation of company policy 2478-A.
        {names.corp.toUpperCase()}&copy; assumes no responsibilities or
        liabilities resulting from the improper use of this feature.
      </P>
      <Flip prefix="&gt; LIFE SUPPORT :: " options={["ENABLED", "DISABLED"]} />
      <Back target="system" />
    </Screen>
  );
};

const Y14SelfDestruct = () => {
  return (
    <Screen id="selfdestruct">
      <Header label="Self-Destruct" />
      <P style="alert">
        WARNING: Destruction of corporate property is a violation of company
        policy 2478-B. {names.corp.toUpperCase()}&copy; assumes no
        responsibilities or liabilities resulting from the improper use of this
        feature.
      </P>
      <Link target="selfdestructactivate">&gt; ACTIVATE SELF-DESTRUCT</Link>
      <Back target="system" />
    </Screen>
  );
};

const Y14SelfDestructActivate = () => {
  return (
    <Screen id="selfdestructactivate">
      <Header label="Self-Destruct" />
      <P style="alert">
        THIS WILL INITIATE A 10-MINUTE STATION SELF-DESTRUCT SEQUENCE.
      </P>
      <P>THIS CANNOT BE UNDONE.</P>
      <PasswordRedirect
        password="ok"
        target="selfdestructevacuate"
        label="TYPE 'OK' TO BEGIN COUNTDOWN: "
      />
      <Back target="selfdestruct" />
    </Screen>
  );
};

const Y14SelfDestructEvacuate = () => {
  return (
    <Screen id="selfdestructevacuate">
      <Header label="Self-Destruct" />
      <Line style="alert">SELF-DESTRUCT SEQUENCE INITIATED.</Line>
      <Line style="alert">PLEASE EVACUATE AS SOON AS POSSIBLE.</Line>
    </Screen>
  );
};

const Y14AirlockErrorDialog = () => {
  return (
    <Dialog id="airlockError" style="alert">
      <P>ERROR! Lock override in effect.</P>
      <Line>Cannot unlock remotely. Manual intervention required.</Line>
    </Dialog>
  );
};

export default function () {
  return (
    <Cassette
      name="001 The Haunting of Ypsilon-14"
      title={`${names.station} Main Computer`}
      author="@troygoode"
      website="https://github.com/troygoode/cathode-ray"
      comment='The security code is "CHAPMAN"'
    >
      <Y14Home />
      <Y14Menu />
      <Y14Schematic />
      <Y14Diagnostics />
      <Y14Schedule />
      <Y14Roster />
      <Y14Comms />
      <Y14HailPlayerShip />
      <Y14HailHeracles />
      <Y14Controls />
      <Y14ControlsUnlocked />
      <Y14Airlocks />
      <Y14Showers />
      <Y14Greenhouse />
      <Y14System />
      <Y14LifeSupport />
      <Y14SelfDestruct />
      <Y14SelfDestructActivate />
      <Y14SelfDestructEvacuate />
      <LockedDialog />
      <Y14AirlockErrorDialog />
    </Cassette>
  );
}
