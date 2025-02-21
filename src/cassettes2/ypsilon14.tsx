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
} from "@/cassette-jsx";

const corp = "Ishiyama Dynamics";

const Home = () => {
  return (
    <Screen id="home">
      <Line>YPSILON-14</Line>
      <Line>==========</Line>
      <Br />
      <Line>
        Welcome to the Ypsilon-14 Mining Station, a property of
        {corp.toUpperCase()} (c), where innovation is our top priority (tm).
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
      <Line>Main Menu</Line>
      <Line>==========</Line>
      <Br />
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
      <Line>Station Map</Line>
      <Line>==========</Line>
      <Br />
      <Bitmap src="https://i.imgur.com/htHuumj.png" style="lighten" />
      <Br />
      <Line>A copy of the map is now available via data tablet.</Line>
      <Br />
      <Line>==========</Line>
      <Br />
      <Link target="menu">&lt; BACK</Link>
    </Screen>
  );
};

const Diagnostics = () => {
  return (
    <Screen id="diagnostics">
      <Line>Diagnostics</Line>
      <Line>==========</Line>
      <Br />
      <Line>Checking life support.............. Done.</Line>
      <Line>Checking main systems.............. Done.</Line>
      <Br />
      <Line style="alert">
        WARNING: Airflow 82.4%. Check crew quarters vents for blockage.
      </Line>
      <Line style="alert">
        WARNING: Shower #5 non-functional as of 1 day(s).
      </Line>
      <Br />
      <Line>NOTICE: Air filters replaced 455 day(s) ago.</Line>
      <Line>NOTICE: Mineshaft lift maintained 455 day(s) ago.</Line>
      <Br />
      <Line>==========</Line>
      <Br />
      <Line>SUMMARY:</Line>
      <Line>All systems operating within acceptible parameters.</Line>
      <Br />
      <Line>==========</Line>
      <Br />
      <Link target="menu">&lt; BACK</Link>
    </Screen>
  );
};

const Schedule = () => {
  return (
    <Screen id="schedule">
      <Line>Schedule</Line>
      <Line>==========</Line>
      <Br />
      <Line>Docking bay activity (past 6 months):</Line>
      <Br />
      <Line>2366-06-12.0633 - Bay 2 : Arrive :: Tempest</Line>
      <Line>2366-04-29.0834 - Bay 1 : Arrive :: Heracles</Line>
      <Line>2366-03-02.1223 - Bay 2 : Depart :: Key Largo</Line>
      <Line>2366-02-20.1604 - Bay 2 : Arrive :: Key Largo</Line>
      <Br />
      <Line>==========</Line>
      <Br />
      <Link target="menu">&lt; BACK</Link>
    </Screen>
  );
};

const Roster = () => {
  return (
    <Screen id="roster">
      <Line>Roster</Line>
      <Line>==========</Line>
      <Br />
      <Line>01. VERHOEVEN, Sonya :: Admin</Line>
      <Line>02. SINGH, Ashraf :: Breaker</Line>
      <Line>03. DE BEERS, Dana :: Lead drill</Line>
      <Line>04. CHATZKEL, Jerome :: Asst. drill</Line>
      <Line>05. TOBIN, Rosa :: Engineer</Line>
      <Line>06. RADIMIR, Mikhail :: Lead Engineer</Line>
      <Line>07. KANTARO, Kenji :: Loader</Line>
      <Line>08. BOWE, Morgan :: Loader</Line>
      <Line>09. NEKTARIOS, Ri :: Loader</Line>
      <Line>10. n/a</Line>
      <Br />
      <Line>==========</Line>
      <Br />
      <Link target="menu">&lt; BACK</Link>
    </Screen>
  );
};

const Comms = () => {
  return (
    <Screen id="comms">
      <Line>COMMS</Line>
      <Line>==========</Line>
      <Br />
      <Line>2 vessels detected in proximity.</Line>
      <Br />
      <Link target="hailtempest">&gt; HAIL TEMPEST</Link>
      <Link target="hailheracles">&gt; HAIL HERACLES</Link>
      <Br />
      <Line>==========</Line>
      <Br />
      <Link target="menu">&lt; BACK</Link>
    </Screen>
  );
};

const HailTempest = () => {
  return (
    <Screen id="hailtempest">
      <Line>Transmitting</Line>
      <Line>==========</Line>
      <Br />
      <Line>..........................................</Line>
      <Line>..........................................</Line>
      <Br />
      <Line>COMMUNICATION CHANNEL OPENED</Line>
      <Br />
      <Line>==========</Line>
      <Br />
      <Link target="comms">&lt; CLOSE CHANNEL</Link>
    </Screen>
  );
};

const HailHeracles = () => {
  return (
    <Screen id="hailheracles">
      <Line>Transmitting</Line>
      <Line>==========</Line>
      <Br />
      <Line>..........................................</Line>
      <Line>..........................................</Line>
      <Line>..........................................</Line>
      <Line>..........................................</Line>
      <Br />
      <Line style="alert">NO RESPONSE</Line>
      <Br />
      <Line>==========</Line>
      <Br />
      <Link target="comms">&lt; CLOSE CHANNEL</Link>
    </Screen>
  );
};

const Controls = () => {
  return (
    <Screen id="controls">
      <Line>CONTROLS</Line>
      <Line>==========</Line>
      <Br />
      <Line>[A] :: Administrator access only</Line>
      <Br />
      <Link target="showers">&gt; SHOWERS</Link>
      <Link target="greenhouse">&gt; HYDROPONICS LAB</Link>
      <Link
        target={[
          {
            target: "lockedDialog",
            type: "dialog",
            shiftKey: false,
          },
          {
            target: "airlocks",
            type: "link",
            shiftKey: true,
          },
        ]}
      >
        &gt; AIRLOCKS [A]
      </Link>
      <Link
        target={[
          {
            target: "lockedDialog",
            type: "dialog",
            shiftKey: false,
          },
          {
            target: "system",
            type: "link",
            shiftKey: true,
          },
        ]}
      >
        &gt; SYSTEM [A]
      </Link>
      <Br />
      <Line>==========</Line>
      <Br />
      <Link target="menu">&lt; BACK</Link>
    </Screen>
  );
};

const Airlocks = () => {
  return (
    <Screen id="airlocks">
      <Line>Airlocks</Line>
      <Line>==========</Line>
      <Br />
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
      <Br />
      <Line>==========</Line>
      <Br />
      <Link target="controls">&lt; BACK</Link>
    </Screen>
  );
};

const Showers = () => {
  return (
    <Screen id="showers">
      <Line>Showers</Line>
      <Line>==========</Line>
      <Br />
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
      <Br />
      <Line>==========</Line>
      <Br />
      <Link target="controls">&lt; BACK</Link>
    </Screen>
  );
};

const Greenhouse = () => {
  return (
    <Screen id="greenhouse">
      <Line>Hydroponics Lab</Line>
      <Line>==========</Line>
      <Br />
      <Toggle>
        <ToggleOption>&gt; MIST HYDRATION :: OFF</ToggleOption>
        <ToggleOption>&gt; MIST HYDRATION :: ON</ToggleOption>
      </Toggle>
      <Br />
      <Line>==========</Line>
      <Br />
      <Link target="controls">&lt; BACK</Link>
    </Screen>
  );
};

const System = () => {
  return (
    <Screen id="system">
      <Line>System</Line>
      <Line>==========</Line>
      <Br />
      <Link target="lifesupport">&gt; LIFE SUPPORT</Link>
      <Link target="selfdestruct">&gt; SELF-DESTRUCT</Link>
      <Br />
      <Line>==========</Line>
      <Br />
      <Link target="controls">&lt; BACK</Link>
    </Screen>
  );
};

const LifeSupport = () => {
  return (
    <Screen id="lifesupport">
      <Line>Life Support</Line>
      <Line>==========</Line>
      <Br />
      <Line style="alert">
        WARNING: Disabling life support is a violation of company policy 2478-A.
        {corp.toUpperCase()} assumes no responsibilities or liabilities
        resulting from the improper use of this feature.
      </Line>
      <Br />
      <Toggle>
        <ToggleOption>&gt; LIFE SUPPORT :: ENABLED</ToggleOption>
        <ToggleOption>&gt; LIFE SUPPORT :: DISABLED</ToggleOption>
      </Toggle>
      <Br />
      <Line>==========</Line>
      <Br />
      <Link target="system">&lt; BACK</Link>
    </Screen>
  );
};

const SelfDestruct = () => {
  return (
    <Screen id="selfdestruct">
      <Line>Self-Destruct</Line>
      <Line>==========</Line>
      <Br />
      <Line style="alert">
        WARNING: Destruction of corporate property is a violation of company
        policy 2478-B. {corp.toUpperCase()} assumes no responsibilities or
        liabilities resulting from the improper use of this feature.
      </Line>
      <Br />
      <Link target="selfdestructactivate">&gt; ACTIVATE SELF-DESTRUCT</Link>
      <Br />
      <Line>==========</Line>
      <Br />
      <Link target="system">&lt; BACK</Link>
    </Screen>
  );
};

const SelfDestructActivate = () => {
  return (
    <Screen id="selfdestructactivate">
      <Line>Self-Destruct</Line>
      <Line>==========</Line>
      <Br />
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
        TYPE 'OK' TO BEGIN COUNTDOWN:
      </Prompt>
      <Br />
      <Line>==========</Line>
      <Br />
      <Link target="selfdestruct">&lt; BACK</Link>
    </Screen>
  );
};

const SelfDestructEvacuate = () => {
  return (
    <Screen id="selfdestructevacuate">
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

export default () => {
  return (
    <Cassette
      name="The Haunting of Ypsilon-14 JSON data"
      author="@redhg"
      comment="Phosphor content file for the 'Haunting of Ypsilon-14' module for the Mothership tabletop roleplaying game. Visit https://redhg.com/ypsilon14/ to see the compiled application."
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
};
