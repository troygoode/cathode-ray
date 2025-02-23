import { PropsWithChildren } from "react";
import Scanlines from "@/components/Phosphor/Scanlines";
import styles from "./bevel.module.css";

const Bevel = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className={`${styles.content}`}>
        {children}
        <div
          className={`${styles.piece} ${styles.scanlines} ${styles.noclick}`}
        ></div>
      </div>
      <Scanlines />
      <div className={`${styles.noisy} ${styles.outerFrame}`}>
        <div className={styles.frame}>
          <div
            className={`${styles.piece} ${styles.glow} ${styles.noclick}`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Bevel;
