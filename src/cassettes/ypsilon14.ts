import type { ICassette } from "@/cassette";

const json: ICassette = {
  meta: {
    name: "The Haunting of Ypsilon-14 JSON data",
    author: "@redhg",
    comment:
      "Phosphor content file for the 'Haunting of Ypsilon-14' module for the Mothership tabletop roleplaying game. Visit https://redhg.com/ypsilon14/ to see the compiled application.",
  },
  screens: [
    {
      id: "screen0",
      type: "screen",
      content: [
        "YPSILON-14",
        "==========",
        "",
        "Welcome to the Ypsilon-14 Mining Station, a property of ISHIYAMA DYNAMICS (c), where innovation is our top priority (tm).",
        "==========",
        "",
        {
          text: "> ACCEPT EULA & LOG IN",
          type: "link",
          target: "menu",
        },
      ],
    },
    {
      id: "menu",
      type: "screen",
      content: [
        "Main Menu",
        "=========",
        "",
        {
          text: "> STATION MAP",
          type: "link",
          target: "map",
        },
        {
          text: "> DIAGNOSTICS",
          type: "link",
          target: "diagnostics",
        },
        {
          text: "> SCHEDULE",
          type: "link",
          target: "schedule",
        },
        {
          text: "> ROSTER",
          type: "link",
          target: "roster",
        },
        {
          text: "> COMMS",
          type: "link",
          target: "comms",
        },
        {
          text: "> CONTROLS",
          type: "link",
          target: "controls",
        },
      ],
    },
    {
      id: "map",
      type: "screen",
      content: [
        "Station Map",
        "===========",
        "",
        {
          type: "bitmap",
          src: "https://i.imgur.com/htHuumj.png",
          className: "lighten",
        },
        "",
        "A copy of the map is now available via data tablet.",
        "",
        "======",
        "",
        {
          text: "< BACK",
          target: "menu",
          type: "link",
        },
      ],
    },
    {
      id: "diagnostics",
      type: "screen",
      content: [
        "Diagnostics",
        "===========",
        "",
        "Checking life support.............. Done.",
        "Checking main systems.............. Done.",
        "",
        {
          text: "WARNING: Airflow 82.4%. Check crew quarters vents for blockage.",
          className: "alert",
          type: "text",
        },
        {
          text: "WARNING: Shower #5 non-functional as of 1 day(s).",
          className: "alert",
          type: "text",
        },
        "",
        "NOTICE: Air filters replaced 455 day(s) ago.",
        "NOTICE: Mineshaft lift maintained 455 day(s) ago.",
        "",
        "===========",
        "",
        "SUMMARY:",
        "All systems operating within acceptible parameters.",
        "",
        "======",
        "",
        {
          text: "< BACK",
          target: "menu",
          type: "link",
        },
      ],
    },
    {
      id: "schedule",
      type: "screen",
      content: [
        "Schedule",
        "========",
        "",
        "Docking bay activity (past 6 months):",
        "",
        "2366-06-12.0633 - Bay 2 : Arrive :: Tempest",
        "2366-04-29.0834 - Bay 1 : Arrive :: Heracles",
        "2366-03-02.1223 - Bay 2 : Depart :: Key Largo",
        "2366-02-20.1604 - Bay 2 : Arrive :: Key Largo",
        "",
        "======",
        "",
        {
          text: "< BACK",
          target: "menu",
          type: "link",
        },
      ],
    },
    {
      id: "roster",
      type: "screen",
      content: [
        "Roster",
        "======",
        "",
        "01. VERHOEVEN, Sonya     :: Admin",
        "02. SINGH, Ashraf        :: Breaker",
        "03. DE BEERS, Dana       :: Lead drill",
        "04. CHATZKEL, Jerome     :: Asst. drill",
        "05. TOBIN, Rosa          :: Engineer",
        "06. RADIMIR, Mikhail     :: Lead Engineer",
        "07. KANTARO, Kenji       :: Loader",
        "08. BOWE, Morgan         :: Loader",
        "09. NEKTARIOS, Ri        :: Loader",
        "10. n/a",
        "",
        "======",
        "",
        {
          text: "< BACK",
          target: "menu",
          type: "link",
        },
      ],
    },
    {
      id: "comms",
      type: "screen",
      content: [
        "COMMS",
        "=====",
        "",
        "2 vessels detected in proximity.",
        "",
        {
          text: "> HAIL TEMPEST",
          target: "hailtempest",
          type: "link",
        },
        {
          text: "> HAIL HERECLES",
          target: "hailherecles",
          type: "link",
        },
        "",
        "======",
        "",
        {
          text: "< BACK",
          target: "menu",
          type: "link",
        },
      ],
    },
    {
      id: "hailtempest",
      type: "screen",
      content: [
        "Transmitting",
        "============",
        "",
        "..........................................",
        "..........................................",
        "",
        "COMMUNICATION CHANNEL OPENED",
        "",
        "======",
        "",
        {
          text: "< CLOSE CHANNEL",
          target: "comms",
          type: "link",
        },
      ],
    },
    {
      id: "hailherecles",
      type: "screen",
      content: [
        "Transmitting",
        "============",
        "",
        "..........................................",
        "..........................................",
        "..........................................",
        "..........................................",
        "",
        {
          type: "text",
          className: "alert",
          text: "NO RESPONSE",
        },
        "",
        "======",
        "",
        {
          text: "< BACK",
          target: "comms",
          type: "link",
        },
      ],
    },
    {
      id: "controls",
      type: "screen",
      content: [
        "Controls",
        "========",
        "",
        "[A] :: Administrator access only",
        "",
        {
          text: "> SHOWERS",
          target: "showers",
          type: "link",
        },
        {
          text: "> HYDROPONICS LAB",
          target: "greenhouse",
          type: "link",
        },
        {
          text: "> AIRLOCKS [A]",
          type: "link",
          target: [
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
          ],
        },
        {
          text: "> SYSTEM [A]",
          type: "link",
          target: [
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
          ],
        },
        "",
        "======",
        "",
        {
          text: "< BACK",
          target: "menu",
          type: "link",
        },
      ],
    },
    {
      id: "airlocks",
      type: "screen",
      content: [
        "Airlocks",
        "========",
        "",
        {
          type: "link",
          text: "> DOCKING BAY 1 :: LOCKED — ERROR",
          className: "alert",
          target: [
            {
              target: "airlockError",
              type: "dialog",
              shiftKey: false,
            },
          ],
        },
        {
          type: "toggle",
          states: [
            {
              text: "> DOCKING BAY 2 :: UNLOCKED",
              active: true,
            },
            {
              text: "> DOCKING BAY 2 :: LOCKED",
              active: false,
            },
          ],
        },
        "",
        "======",
        "",
        {
          text: "< BACK",
          target: "controls",
          type: "link",
        },
      ],
    },
    {
      id: "showers",
      type: "screen",
      content: [
        "Showers",
        "=======",
        "",
        {
          type: "toggle",
          states: [
            {
              text: "> SHOWER 1 :: OFF",
              active: true,
            },
            {
              text: "> SHOWER 1 :: ON",
              active: false,
            },
          ],
        },
        {
          type: "toggle",
          states: [
            {
              text: "> SHOWER 2 :: OFF",
              active: true,
            },
            {
              text: "> SHOWER 2 :: ON",
              active: false,
            },
          ],
        },
        {
          type: "toggle",
          states: [
            {
              text: "> SHOWER 3 :: OFF",
              active: true,
            },
            {
              text: "> SHOWER 3 :: ON",
              active: false,
            },
          ],
        },
        {
          type: "toggle",
          states: [
            {
              text: "> SHOWER 4 :: OFF",
              active: true,
            },
            {
              text: "> SHOWER 4 :: ON",
              active: false,
            },
          ],
        },
        {
          type: "text",
          className: "alert",
          text: "> SHOWER 5 :: MALFUNCTIONING",
        },
        {
          type: "toggle",
          states: [
            {
              text: "> SHOWER 6 :: OFF",
              active: true,
            },
            {
              text: "> SHOWER 6 :: ON",
              active: false,
            },
          ],
        },
        "",
        "======",
        "",
        {
          text: "< BACK",
          target: "controls",
          type: "link",
        },
      ],
    },
    {
      id: "greenhouse",
      type: "screen",
      content: [
        "Hydroponics Lab",
        "===============",
        "",
        {
          type: "toggle",
          states: [
            {
              text: "> MIST HYDRATION SYSTEM :: OFF",
              active: true,
            },
            {
              text: "> MIST HYDRATION SYSTEM :: ON",
              active: false,
            },
          ],
        },
        "",
        "======",
        "",
        {
          text: "< BACK",
          target: "controls",
          type: "link",
        },
      ],
    },
    {
      id: "system",
      type: "screen",
      content: [
        "System",
        "======",
        "",
        {
          text: "> LIFE SUPPORT",
          target: "lifesupport",
          type: "link",
        },
        {
          text: "> SELF-DESTRUCT",
          target: "selfdestruct",
          type: "link",
        },
        "",
        "======",
        "",
        {
          text: "< BACK",
          target: "controls",
          type: "link",
        },
      ],
    },
    {
      id: "lifesupport",
      type: "screen",
      content: [
        "Life Support",
        "============",
        "",
        {
          type: "text",
          className: "alert",
          text: "WARNING: Disabling life support is a violation of company policy #2778-A. ISHIYAMA DYNAMICS assumes no responsibilities or liabilities resulting from the improper use of this feature.",
        },
        "",
        {
          type: "toggle",
          states: [
            {
              text: "> LIFE SUPPORT :: ENABLED",
              active: true,
            },
            {
              text: "> LIFE SUPPORT :: DISABLED",
              active: false,
            },
          ],
        },
        "",
        "======",
        "",
        {
          text: "< BACK",
          target: "system",
          type: "link",
        },
      ],
    },
    {
      id: "selfdestruct",
      type: "screen",
      content: [
        "Self-Destruct",
        "=============",
        "",
        {
          type: "text",
          className: "alert",
          text: "WARNING: Destruction of corporate property is a violation of company policy #2778-B. ISHIYAMA DYNAMICS assumes no responsibilities or liabilities resulting from the improper use of this feature.",
        },
        "",
        {
          text: "> ACTIVATE SELF-DESTRUCT",
          target: "activateeslfdestruct",
          type: "link",
        },
        "",
        "======",
        "",
        {
          text: "< BACK",
          target: "system",
          type: "link",
        },
      ],
    },
    {
      id: "activateeslfdestruct",
      type: "screen",
      content: [
        "Activate Self-Destruct",
        "======================",
        "",
        {
          type: "text",
          className: "alert",
          text: "THIS WILL INITIATE A 10-MINUTE STATION SELF-DESTRUCT SEQUENCE.",
        },
        "",
        {
          type: "text",
          className: "alert",
          text: "THIS CANNOT BE UNDONE.",
        },
        "",
        {
          type: "prompt",
          prompt: "TYPE 'OK' TO BEGIN COUNTDOWN: ",
          className: "alert cursor",
          commands: [
            {
              command: "ok",
              action: {
                type: "link",
                target: "evacuate",
              },
            },
          ],
        },
        "",
        "======",
        "",
        {
          text: "< BACK",
          target: "selfdestruct",
          type: "link",
        },
      ],
    },
    {
      id: "evacuate",
      type: "screen",
      content: [
        {
          type: "text",
          className: "alert",
          text: "SELF-DESTRUCT SEQUENCE INITIATED.",
        },
        {
          type: "text",
          className: "alert",
          text: "PLEASE EVACUATE AS SOON AS POSSIBLE.",
        },
      ],
    },
  ],
  dialogs: [
    {
      id: "lockedDialog",
      type: "alert",
      content: ["Error! Authorization required."],
    },
    {
      id: "airlockError",
      type: "alert",
      content: [
        "ERROR! Lock override in effect.",
        "",
        "Cannot unlock remotely. Manual intervention required.",
      ],
    },
  ],
};

export default json;
