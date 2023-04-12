import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./card.module.css";
import classNames from "classnames";

const Card = (props) => {
  return (
    <div>
      <Link href={props.link} className={styles.cardLink}>
        <div className={classNames("glass", styles.container)}>
          <div className={styles.cardHeaderWrapper}>
            <h2 className={styles.cardHeader}>{props.name}</h2>
          </div>
          <Image
            src={props.imgUrl}
            width={260}
            height={160}
            alt={"cofee img"}
            className={styles.cardImage}
          />
        </div>
      </Link>
    </div>
  );
};

export default Card;
