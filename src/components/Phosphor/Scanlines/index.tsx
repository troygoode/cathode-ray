import styles from "./scanlines.module.css";

import React, { FC } from "react";
import cssClass from "@/utils/css-class";

const Scanlines: FC = () => (
  <section className={cssClass(styles, "scanlines")} />
);

export default Scanlines;
