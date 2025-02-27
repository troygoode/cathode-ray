import { P } from "@/components/CathodeRay";
import { Screen, Line, Br } from "@/components/CathodeRay/Core";
import type { IAgenda } from "./agenda";

const id = "agenda7";
const title = "Dead Cat";

const Agenda = () => {
  const from = "noreply@pawsplanet.gal";
  const subject = "SAD NEWS :-(";
  return (
    <Screen id={id}>
      <Line>FROM....... {from}</Line>
      <Line>TO......... [REDACTED]</Line>
      <Line>SUBJECT.... {subject}</Line>
      <Br />
      <P>Dear valued PawsPlanet&copy; customer,</P>
      <P>
        So sorry to be the bearer of bad news but your cat is dead.
        &lt;CUSTOMER_PET_NAME&gt; made a lasting impression on our staff and
        will be missed. The cause of death was
        &lt;CUSTOMER_PET_DEATH1_CAUSE&gt;.
      </P>
      <P>
        For your convenience we have disposed of the corpse and have authorized
        a one-time pro-ration of fees for your pet&apos;s shortened stay and
        will process Cr.63 back to your account within the next 60 business
        cycles.
      </P>
      <P>
        Please note that per the Terms of Service agreement you accepted by
        entering our facility:
      </P>
      <Line>
        1. You have indemnified PawsPlanet&copy; for all material and
        non-material damages to you and/or your property (including pets and/or
        children left in our care)
      </Line>
      <P>
        2. You are required to pay for the full duration of your pet&apos;s
        reservation for future stays &mdash; we only offer pro-ration of
        truncated stays once per account lifetime
      </P>
      <P>
        We appreciate your business and hope you&apos;ll entrust
        PawsPlanet&copy; with your furry loved one once again for your next trip
        off-station. Please leave us a review at [LINK_CORRUPTED] and use the
        code CUTEANDFLUFFY for 5% off your pet&apos;s next stay at
        PawsPlanet&copy;.
      </P>
      <P>Appreciatevely,</P>
      <P>The &quot; Pet Experts&trade; &quot; here at PawsPlanet&copy;!</P>
    </Screen>
  );
};

const retval: IAgenda = { Agenda, id, title };
export default retval;
