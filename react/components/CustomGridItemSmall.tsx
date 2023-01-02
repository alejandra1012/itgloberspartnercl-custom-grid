import React, { ReactNode } from "react";
import styles from "./styles.css"

type Props = {
  elementOne: ReactNode,
  elementTwo: ReactNode

}

const CustomGridItemSmall = ({elementOne, elementTwo}: Props) => {
  return <div className={styles["grid__item--small"]}>
      <div className={styles["item__small"]}>
        {elementOne}
      </div>
      <div className={styles["item__small"]}>
        {elementTwo}
      </div>
  </div>
}

export default CustomGridItemSmall
