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

import cat from "@/cassettes/phosphor-sample/sample-cat.jpg";

const Screen0 = () => {
  return (
    <Screen id="screen0">
      <Line>
        Screen content can be a string. And that string can contain{"\n\n"}
        linebreaks.
      </Line>
      <Br />
      <Line>Or it can be an empty string like the above entry.</Line>
      <Line style="alert">
        Or it can be an Object with an specific CSS &apos;className&apos;
        property, like &apos;alert&apos;, currently the only one.
      </Line>
      <Br />
      <Line>
        Links to other Screens can be rendered, too. Linking to the current
        screen&apos;s ID will cause it to redraw. Like this:
      </Line>
      <Link target="screen0">&gt; CLICK TO RELOAD THIS SCREEN</Link>
      <Br />
      <Line>
        Linking instead to a different screen&apos;s ID will, naturally, render
        that screen&apos;s content.
      </Line>
      <Link target="screen1">&gt; NEXT</Link>
    </Screen>
  );
};

const Screen1 = () => {
  return (
    <Screen id="screen1">
      <Line>
        Text is great an all, but what about toggle buttons? Toggle buttons
        cycle through their states, starting with whichever has &apos;active:
        true&apos;.
      </Line>
      <Br />
      <Line>
        You can click the following button several times to cycle through its
        available states
      </Line>
      <Br />
      <Toggle>
        <ToggleOption>&gt; Hello.</ToggleOption>
        <ToggleOption>&gt; How are you?</ToggleOption>
        <ToggleOption>&gt; I am fine, thanks.</ToggleOption>
      </Toggle>
      <Br />
      <Line>
        Links can be configured to behave differently when &lt;shift&gt; is held
        down. Clicking the following link normally will show an alert dialog,
        but holding &lt;shift&gt; and clicking will navigate back to the first
        screen. (This doesn&apos;t work on touch-only devices, obviously.)
      </Line>
      <Br />
      <Link
        target={[
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
        ]}
      >
        &gt; LOCKED LINK. Shift+click to unlock
      </Link>
      <Br />
      <Line>
        There&apos;s also a module that accepts user input. It&apos;s very
        particular, and it uses a document-wide event listener which is pretty
        hacky. See what happens when you type the following commands:
      </Line>
      <Br />
      <Line>BACK</Line>
      <Line>DIALOG</Line>
      <Line>IMAGE</Line>
      <Prompt
        commands={[
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
        ]}
      >
        Enter command:
      </Prompt>
    </Screen>
  );
};

const Screen2 = () => {
  return (
    <Screen id="screen2">
      <Line>
        We can load images, too. Create an object of type &quot;bitmap&quot;
        with a src pointing to a URL and add an optional image effect className,
        such as &quot;luminosity&quot; or &quot;lighten&quot;. See
        Bitmap/style.scss for a list of supported modes.
      </Line>
      <Br />
      <Line>Normal:</Line>
      <Bitmap src={cat.src} />
      <Br />
      <Line>Color Dodge:</Line>
      <Bitmap style="color-dodge" src={cat.src} />
      <Br />
      <Line>Luminosity:</Line>
      <Bitmap style="luminosity" src={cat.src} />
      <Br />
      <Link target="screen1">&lt; BACK</Link>
    </Screen>
  );
};

const Dialog1 = () => {
  return (
    <Dialog id="dialog1" style="alert">
      <Line>This is the first line in the dialog.</Line>
      <Line>And this is the second line.</Line>
      <Line>
        Press &lt;enter&gt;, &lt;esc&gt;, or click anywhere to close this
        dialog.
      </Line>
    </Dialog>
  );
};

const LockedDialog = () => {
  return (
    <Dialog id="lockedDialog" style="alert">
      <Line>
        This is a locked link. You&apos;ll need to &lt;shift&gt;+click to
        activate it.
      </Line>
      <Line>
        Press &lt;enter&gt;, &lt;esc&gt;, or click anywhere to close this
        dialog.
      </Line>
    </Dialog>
  );
};

export default function Ypsilon14() {
  return (
    <Cassette name="Sample (Original Phosphor Version)" author="@redhg">
      <Screen0 />
      <Screen1 />
      <Screen2 />
      <Dialog1 />
      <LockedDialog />
    </Cassette>
  );
}
