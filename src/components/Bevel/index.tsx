import { PropsWithChildren } from "react";
import Scanlines from "@/components/Phosphor/Scanlines";
import styles from "./bevel.module.css";

type TBevelProps = {
  mobile?: boolean;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Bevel = ({
  mobile,
  children,
  ...props
}: PropsWithChildren<TBevelProps>) => {
  return (
    <div {...props}>
      <div className={`${styles.content}`}>
        {children}
        <div
          className={`${styles.piece} ${
            mobile ? styles.scanlinesMobile : styles.scanlines
          } ${styles.noclick}`}
        ></div>
      </div>
      <Scanlines />
      <div
        className={`${styles.noisy} ${
          mobile ? styles.outerFrameMobile : styles.outerFrame
        }`}
      >
        <div className={`${mobile ? styles.frameMobile : styles.frame}`}>
          <div
            className={`${styles.piece} ${styles.glow} ${styles.noclick}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Bevel;
