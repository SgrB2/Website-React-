import React from "react";

import styles from "./ArticleMedium.module.css";
import ActionsBlock from "../../../ActionsBlock/ActionsBlock"

interface Post {
  key?: number;
  image?: string;
  text?: string;
  date: string;
  title: string;
}

const ArticleMedium: React.FC<Post> = (props) => {
  return (

      <article className={styles.container}>
        <img className={styles.img} src={props.image} alt="img" />
        <div className={styles.content}>
          <span className={styles.data}>{props.date}</span>
          <h4 className={styles.title}>{props.title}</h4>
        </div>
        <ActionsBlock />
      </article>
  );
};

export default ArticleMedium;
