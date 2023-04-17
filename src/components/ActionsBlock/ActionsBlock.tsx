import React from "react";

import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineEllipsis,
} from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";

import styles from "./ActionsBlock.module.css";

const ActionsBlock: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_actions}>
        <div className={styles.actions}>
          <AiOutlineLike size={22} />
        </div>
        <div className={styles.actions}>
          <AiOutlineDislike size={22} />
        </div>
      </div>
      <div className={styles.container_actions}>
        <div className={styles.actions}>
          <BsBookmark size={22} />
        </div>
        <div className={styles.actions}>
          <AiOutlineEllipsis size={22} />
        </div>
      </div>
    </div>
  );
};

export default ActionsBlock;
