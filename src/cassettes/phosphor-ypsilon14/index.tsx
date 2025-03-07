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

import map from "@/cassettes/phosphor-ypsilon14/ypsilon14-map.png";
import { PropsWithChildren } from "react";

const today = new Date(2366, 5, 12);
const names = {
  station: "Ypsilon-14",
  corp: "Ishiyama Dynamics",
  playerShip: "Tempest",
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
  type: "link" | "dialog";
  target: string;
};
const LockedLink = ({
  children,
  ifLockedTarget = "lockedDialog",
  ifLockedTargetType = "dialog",
  target,
  type,
}: PropsWithChildren<TLockedLinkProps>) => {
  return (
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
      <Link target="menu">&gt; ACCEPT EULA</Link>
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
      <Line>Checking life support.............. Done.</Line>
      <Line>Checking main systems.............. Done.</Line>
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
        {formatDate(today)}.0633 - Bay 2 : Arrive :: {names.playerShip}
      </Line>
      <Line>
        {formatDate(subtractDays(today, 14))}.0834 - Bay 1 : Arrive :: Heracles
      </Line>
      <Line>
        {formatDate(subtractDays(today, 85))}.1223 - Bay 1 : Depart :: Key Largo
      </Line>
      <Line>
        {formatDate(subtractDays(today, 86))}.1604 - Bay 1 : Arrive :: Key Largo
      </Line>
      <Line>
        {formatDate(subtractDays(today, 175))}.4823 - Bay 1 : Depart :: Key
        Largo
      </Line>
      <Line>
        {formatDate(subtractDays(today, 176))}.8771 - Bay 1 : Arrive :: Key
        Largo
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
      <Link target="hailtempest">
        &gt; HAIL {names.playerShip.toUpperCase()}
      </Link>
      <Link target="hailheracles">&gt; HAIL HERACLES</Link>
      <Back target="menu" />
    </Screen>
  );
};

const HailTempest = () => {
  return (
    <Screen id="hailtempest">
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
      <Line style="alert">NO RESPONSE FROM HERACLES</Line>
      <Back target="comms" label="Close Channel" />
    </Screen>
  );
};

const Controls = () => {
  return (
    <Screen id="controls">
      <Header label="Controls" />
      <Line>[A] :: Administrator access only</Line>
      <Br />
      <Link target="showers">&gt; SHOWERS</Link>
      <Link target="greenhouse">&gt; HYDROPONICS LAB</Link>
      <LockedLink target="airlocks" type="link">
        &gt; AIRLOCKS [A]
      </LockedLink>
      <LockedLink target="system" type="link">
        &gt; SYSTEM [A]
      </LockedLink>
      <Back target="menu" />
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
      <Back target="controls" />
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
      <Back target="controls" />
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
      name="999 The Haunting of Ypsilon-14 (Original Phosphor Version)"
      title={`${names.station} Main Computer`}
      author="@redhg"
      comment="Phosphor content file for the 'Haunting of Ypsilon-14' module for the Mothership tabletop roleplaying game."
      website="https://redhg.com/ypsilon14/"
    >
      <Home />
      <MainMenu />
      <Map />
      <Diagnostics />
      <Schedule />
      <Roster />
      <Comms />
      <HailTempest />
      <HailHeracles />
      <Controls />
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
