import type { ICassette } from "@/cassette";

const json: ICassette = {
  meta: {
    name: "Sample JSON data",
    author: "@redhg",
  },
  screens: [
    {
      id: "screen0",
      type: "screen",
      content: [
        "Screen content can be a string. And that string can contain\n\nlinebreaks.",
        "",
        "Or it can be an empty string like the above entry.",
        {
          type: "text",
          text: "Or it can be an Object with an specific CSS 'className' property, like 'alert', currently the only one.",
          className: "alert",
        },
        "",
        "Links to other Screens can be rendered, too. Linking to the current screen's ID will cause it to redraw. Like this:",
        {
          type: "link",
          target: "screen0",
          text: "> CLICK TO RELOAD THIS SCREEN",
        },
        "",
        "Linking instead to a different screen's ID will, naturally, render that screen's content.",
        {
          type: "link",
          target: "screen1",
          text: "> NEXT",
        },
      ],
    },
    {
      id: "screen1",
      type: "screen",
      content: [
        "Text is great an all, but what about toggle buttons? Toggle buttons cycle through their states, starting with whichever has 'active: true'.",
        "You can click the following button several times to cycle through its available states",
        "",
        {
          type: "toggle",
          states: [
            {
              active: true,
              text: "> Hello.",
            },
            {
              active: false,
              text: "> How are you?",
            },
            {
              active: false,
              text: "> I am fine, thanks.",
            },
          ],
        },
        "",
        "Links can be configured to behave differently when <shift> is held down. Clicking the following link normally will show an alert dialog, but holding <shift> and clicking will navigate back to the first screen. (This doesn't work on touch-only devices, obviously.)",
        "",
        {
          text: "> LOCKED LINK. Shift+click to unlock",
          type: "link",
          target: [
            {
              target: "lockedDialog",
              type: "dialog",
              shiftKey: false,
            },
            {
              target: "screen0",
              type: "link",
              shiftKey: true,
            },
          ],
        },
        "",
        "There's also a module that accepts user input. It's very particular, and it uses a document-wide event listener which is pretty hacky. See what happens when you type the following commands:\n\n",
        "BACK",
        "DIALOG",
        "IMAGE",
        {
          type: "prompt",
          prompt: "Enter command: ",
          className: "cursor",
          commands: [
            {
              command: "back",
              action: {
                type: "link",
                target: "screen0",
              },
            },
            {
              command: "dialog",
              action: {
                type: "dialog",
                target: "dialog1",
              },
            },
            {
              command: "image",
              action: {
                type: "link",
                target: "screen2",
              },
            },
          ],
        },
        "\n",
        {
          type: "link",
          target: "screen2",
          text: "> IMAGE LOADING",
        },
        {
          type: "link",
          target: "screen1",
          text: "> CLICK HERE TO RETURN TO THE FIRST SCREEN",
        },
      ],
    },
    {
      id: "screen2",
      type: "screen",
      content: [
        'We can load images, too. Create an object of type "bitmap" with a src pointing to a URL and add an optional image effect className, such as "luminosity" or "lighten". See Bitmap/style.scss for a list of supported modes.',
        {
          type: "bitmap",
          src: "https://i.imgur.com/rDjphNY.jpg",
        },
        {
          type: "bitmap",
          src: "https://i.imgur.com/rDjphNY.jpg",
          className: "lighten",
        },
        {
          type: "bitmap",
          src: "https://i.imgur.com/rDjphNY.jpg",
          className: "luminosity",
        },
        "\n",
        "Note that as of 2020-06-12, the above blend-modes appear broken in Chrome, but work just fine in Firefox & Safari of all things.",
        "",
        {
          type: "link",
          target: "screen1",
          text: "> BACK",
        },
      ],
    },
  ],
  dialogs: [
    {
      id: "dialog1",
      type: "alert",
      content: [
        "This is the first line in the dialog.",
        "And this is the second line.",
        "Press <enter>, <esc>, or click anywhere to close this dialog.",
      ],
    },
    {
      id: "lockedDialog",
      type: "alert",
      content: [
        "This is a locked link. You'll need to <shift>+click to activate it.",
        "Press <enter>, <esc>, or click anywhere to close this dialog.",
      ],
    },
  ],
};

export default json;
