import React from "react";

import styles from "./ArticleSmall.module.css";
import ActionsBlock from "../../../ActionsBlock/ActionsBlock";
interface Post {
  key?: number;
  image?: string;
  text?: string;
  date: string;
  title: string;
}

const ArticleSmall: React.FC<Post> = (props) => {
  return (
    <article className={styles.container}>
      <div className={styles.container_main}>
        <div className={styles.content}>
          <p className={styles.data}>{props.date}</p>
          <h4 className={styles.title}>{props.title}</h4>
        </div>
        <div>
          <img className={styles.img} src={props.image} alt="img" />
        </div>
      </div>
      <ActionsBlock />
    </article>
  );
};

export default ArticleSmall;
