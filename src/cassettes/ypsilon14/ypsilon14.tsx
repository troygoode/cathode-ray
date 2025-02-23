import { Header } from "@/components/CathodeRay";
import {
  Cassette,
  Screen,
  Line,
  Br,
  Link,
  Bitmap,
  Toggle,
  ToggleOption,
  Prompt,
  Dialog,
  Wrapper,
} from "@/components/CathodeRay/Core";

import map from "@/cassettes/ypsilon14/ypsilon14-map.png";
import { PropsWithChildren } from "react";

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

function formatDate(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(date.getDate()).padStart(2, "0")}`;
}

function subtractDays(date: Date, days: number) {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() - days);
  return newDate;
}

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
      <Header label={names.station} />
      <Line>
        Welcome to the {names.station} Mining Station, a property of
        {names.corp.toUpperCase()}&copy;, where innovation is our top
        priority&trade;.
      </Line>
      <Line>==========</Line>
      <Br />
      <Link target="menu">&gt; ACCEPT EULA & LOGIN</Link>
    </Screen>
  );
};

const MainMenu = () => {
  return (
    <Screen id="menu">
      <Header label="Main Menu" />
      <Link target="map">&gt; STATION MAP</Link>
      <Link target="diagnostics">&gt; DIAGNOSTICS</Link>
      <Link target="schedule">&gt; SCHEDULE</Link>
      <Link target="roster">&gt; ROSTER</Link>
      <Link target="comms">&gt; COMMS</Link>
      <Link target="controls">&gt; CONTROLS</Link>
    </Screen>
  );
};

const Map = () => {
  return (
    <Screen id="map">
      <Header label="Station Map" />
      <Bitmap src={map.src} style="lighten" />
      <Br />
      <Line>A copy of the map is now available via data tablet.</Line>
      <Back target="menu" />
    </Screen>
  );
};

const Diagnostics = () => {
  return (
    <Screen id="diagnostics">
      <Header label="Diagnostics" />
      <Line>Checking life support.............. OK.</Line>
      <Line>Checking main systems.............. OK.</Line>
      <Br />
      <Line style="alert">
        WARNING: Airflow 82.4%. Check vents for blockage.
      </Line>
      <Line style="alert">
        WARNING: Shower #5 non-functional as of 1 day(s) ago.
      </Line>
      <Br />
      <Line>NOTICE: Air filters replaced 143 day(s) ago.</Line>
      <Line>NOTICE: Mineshaft lift maintained 455 day(s) ago.</Line>
      <Br />
      <Line>SUMMARY:</Line>
      <Line>All systems operating within acceptible parameters.</Line>
      <Back target="menu" />
    </Screen>
  );
};

const Schedule = () => {
  return (
    <Screen id="schedule">
      <Header label="Schedule" />
      <Line>Docking bay activity (past 6 months):</Line>
      <Br />
      <Line>
        {formatDate(today)}.0633 - Bay 2 : Arrive ::{" "}
        {names.playerShip.toUpperCase()}
      </Line>
      <Line>
        {formatDate(subtractDays(today, 28))}.0834 - Bay 1 : Arrive :: RSV
        HERACLES
      </Line>
      <Line>
        {formatDate(subtractDays(today, 30))}.1223 - Bay 1 : Depart :: CTV HORN
        OF PLENTY
      </Line>
      <Line>
        {formatDate(subtractDays(today, 31))}.1604 - Bay 1 : Arrive :: CTV HORN
        OF PLENTY
      </Line>
      <Line>
        {formatDate(subtractDays(today, 58))}.1223 - Bay 1 : Depart :: MSV
        VASQUEZ XV
      </Line>
      <Line>
        {formatDate(subtractDays(today, 59))}.1604 - Bay 1 : Arrive :: MSV
        VASQUEZ XV
      </Line>
      <Line>
        {formatDate(subtractDays(today, 84))}.1223 - Bay 1 : Depart :: CTV HORN
        OF PLENTY
      </Line>
      <Line>
        {formatDate(subtractDays(today, 85))}.1604 - Bay 1 : Arrive :: CTV HORN
        OF PLENTY
      </Line>
      <Line>
        {formatDate(subtractDays(today, 128))}.1223 - Bay 1 : Depart :: MSV
        VASQUEZ XV
      </Line>
      <Line>
        {formatDate(subtractDays(today, 129))}.1604 - Bay 1 : Arrive :: MSV
        VASQUEZ XV
      </Line>
      <Back target="menu" />
    </Screen>
  );
};

const Roster = () => {
  return (
    <Screen id="roster">
      <Header label="Roster" />
      <Line>01. {names.roster.sonya}</Line>
      <Line>02. {names.roster.ashraf}</Line>
      <Line>03. {names.roster.dana}</Line>
      <Line>04. {names.roster.jerome}</Line>
      <Line>05. {names.roster.kantaro}</Line>
      <Line>06. {names.roster.morgan}</Line>
      <Line>07. {names.roster.rie}</Line>
      <Line>08. {names.roster.rosa}</Line>
      <Line>09. {names.roster.mike}</Line>
      <Line>10. {names.roster.unused}</Line>
      <Back target="menu" />
    </Screen>
  );
};

const Comms = () => {
  return (
    <Screen id="comms">
      <Header label="Comms" />
      <Line>2 vessels detected in proximity.</Line>
      <Br />
      <Link target="hailplayership">
        &gt; HAIL {names.playerShip.toUpperCase()}
      </Link>
      <Link target="hailheracles">&gt; HAIL RSV HERACLES</Link>
      <Back target="menu" />
    </Screen>
  );
};

const HailPlayerShip = () => {
  return (
    <Screen id="hailplayership">
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

const HailHeracles = () => {
  return (
    <Screen id="hailheracles">
      <Header label="Transmitting" />
      <Line>..........................................</Line>
      <Line>..........................................</Line>
      <Line>..........................................</Line>
      <Line>..........................................</Line>
      <Br />
      <Line style="alert">NO RESPONSE FROM RSV HERACLES</Line>
      <Back target="comms" label="Close Channel" />
    </Screen>
  );
};

const Controls = () => {
  return (
    <Screen id="controls">
      <Header label="Controls" />
      <Link target="showers">&gt; SHOWERS</Link>
      <Link target="greenhouse">&gt; HYDROPONICS LAB</Link>
      <LockedLink target="airlocks" type="link">
        &gt; AIRLOCKS [A]
      </LockedLink>
      <LockedLink target="system" type="link">
        &gt; SYSTEM [A]
      </LockedLink>
      <Br />
      <Line>[A] :: Administrator access only</Line>
      <Br />
      <Prompt
        commands={[
          {
            command: password,
            action: {
              type: "link",
              target: "controlsunlocked",
            },
          },
        ]}
      >
        Enter security code to unlock:
      </Prompt>
      <Back target="menu" />
    </Screen>
  );
};

const ControlsUnlocked = () => {
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

const Airlocks = () => {
  return (
    <Screen id="airlocks">
      <Header label="Airlocks" />
      <Link
        target={[
          {
            target: "airlockError",
            type: "dialog",
            shiftKey: false,
          },
        ]}
        style="alert"
      >
        &gt; DOCKING BAY 1 :: LOCKED — ERROR
      </Link>
      <Toggle>
        <ToggleOption>&gt; DOCKING BAY 2 :: UNLOCKED</ToggleOption>
        <ToggleOption>&gt; DOCKING BAY 2 :: LOCKED</ToggleOption>
      </Toggle>
      <Toggle>
        <ToggleOption>&gt; MINE SHAFT :: UNLOCKED</ToggleOption>
        <ToggleOption>&gt; MINE SHAFT :: LOCKED</ToggleOption>
      </Toggle>
      <Back target="controlsunlocked" />
    </Screen>
  );
};

const Showers = () => {
  return (
    <Screen id="showers">
      <Header label="Showers" />
      <Toggle>
        <ToggleOption>&gt; SHOWER 1 :: OFF</ToggleOption>
        <ToggleOption>&gt; SHOWER 1 :: ON</ToggleOption>
      </Toggle>
      <Toggle>
        <ToggleOption>&gt; SHOWER 2 :: OFF</ToggleOption>
        <ToggleOption>&gt; SHOWER 2 :: ON</ToggleOption>
      </Toggle>
      <Toggle>
        <ToggleOption>&gt; SHOWER 3 :: OFF</ToggleOption>
        <ToggleOption>&gt; SHOWER 3 :: ON</ToggleOption>
      </Toggle>
      <Toggle>
        <ToggleOption>&gt; SHOWER 4 :: OFF</ToggleOption>
        <ToggleOption>&gt; SHOWER 4 :: ON</ToggleOption>
      </Toggle>
      <Line style="alert">&gt; SHOWER 5 :: MALFUNCTIONING</Line>
      <Toggle>
        <ToggleOption>&gt; SHOWER 6 :: OFF</ToggleOption>
        <ToggleOption>&gt; SHOWER 6 :: ON</ToggleOption>
      </Toggle>
      <Back target="controls" />
    </Screen>
  );
};

const Greenhouse = () => {
  return (
    <Screen id="greenhouse">
      <Header label="Hydroponics Lab" />
      <Toggle>
        <ToggleOption>&gt; MIST HYDRATION :: OFF</ToggleOption>
        <ToggleOption>&gt; MIST HYDRATION :: ON</ToggleOption>
      </Toggle>
      <Back target="controls" />
    </Screen>
  );
};

const System = () => {
  return (
    <Screen id="system">
      <Header label="System" />
      <Link target="lifesupport">&gt; LIFE SUPPORT</Link>
      <Link target="selfdestruct">&gt; SELF-DESTRUCT</Link>
      <Back target="controlsunlocked" />
    </Screen>
  );
};

const LifeSupport = () => {
  return (
    <Screen id="lifesupport">
      <Header label="Life Support" />
      <Line style="alert">
        WARNING: Disabling life support is a violation of company policy 2478-A.
        {names.corp.toUpperCase()}&copy; assumes no responsibilities or
        liabilities resulting from the improper use of this feature.
      </Line>
      <Br />
      <Toggle>
        <ToggleOption>&gt; LIFE SUPPORT :: ENABLED</ToggleOption>
        <ToggleOption>&gt; LIFE SUPPORT :: DISABLED</ToggleOption>
      </Toggle>
      <Back target="system" />
    </Screen>
  );
};

const SelfDestruct = () => {
  return (
    <Screen id="selfdestruct">
      <Header label="Self-Destruct" />
      <Line style="alert">
        WARNING: Destruction of corporate property is a violation of company
        policy 2478-B. {names.corp.toUpperCase()}&copy; assumes no
        responsibilities or liabilities resulting from the improper use of this
        feature.
      </Line>
      <Br />
      <Link target="selfdestructactivate">&gt; ACTIVATE SELF-DESTRUCT</Link>
      <Back target="system" />
    </Screen>
  );
};

const SelfDestructActivate = () => {
  return (
    <Screen id="selfdestructactivate">
      <Header label="Self-Destruct" />
      <Line style="alert">
        THIS WILL INITIATE A 10-MINUTE STATION SELF-DESTRUCT SEQUENCE.
      </Line>
      <Br />
      <Line>THIS CANNOT BE UNDONE.</Line>
      <Br />
      <Prompt
        style="alert"
        commands={[
          {
            command: "ok",
            action: {
              type: "link",
              target: "selfdestructevacuate",
            },
          },
        ]}
      >
        TYPE &apos;OK&apos; TO BEGIN COUNTDOWN:
      </Prompt>
      <Back target="selfdestruct" />
    </Screen>
  );
};

const SelfDestructEvacuate = () => {
  return (
    <Screen id="selfdestructevacuate">
      <Header label="Self-Destruct" />
      <Line style="alert">SELF-DESTRUCT SEQUENCE INITIATED.</Line>
      <Line style="alert">PLEASE EVACUATE AS SOON AS POSSIBLE.</Line>
    </Screen>
  );
};

const LockedDialog = () => {
  return (
    <Dialog id="lockedDialog" style="alert">
      <Line>ERROR! Authorization required.</Line>
    </Dialog>
  );
};

const AirlockErrorDialog = () => {
  return (
    <Dialog id="airlockError" style="alert">
      <Line>ERROR! Lock override in effect.</Line>
      <Br />
      <Line>Cannot unlock remotely. Manual intervention required.</Line>
    </Dialog>
  );
};

export default function Ypsilon14() {
  return (
    <Cassette
      name="001 The Haunting of Ypsilon-14"
      title={`${names.station} Main Computer`}
      author="@troygoode"
      website="https://github.com/troygoode/cathode-ray"
      comment='The security code is "CHAPMAN"'
    >
      <Home />
      <MainMenu />
      <Map />
      <Diagnostics />
      <Schedule />
      <Roster />
      <Comms />
      <HailPlayerShip />
      <HailHeracles />
      <Controls />
      <ControlsUnlocked />
      <Airlocks />
      <Showers />
      <Greenhouse />
      <System />
      <LifeSupport />
      <SelfDestruct />
      <SelfDestructActivate />
      <SelfDestructEvacuate />
      <LockedDialog />
      <AirlockErrorDialog />
    </Cassette>
  );
}
