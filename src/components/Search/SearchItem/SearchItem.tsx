import React from "react";

import styles from "./SearchItem.module.css";

interface Post {
  key?: number;
  image?: string;
  text?: string;
  date: string;
  title: string;
}

const SearchItem: React.FC<Post> = (props) => {
  return (
    <article className={styles.container}>
      <div className={styles.container_main}>
        <div>
          <img className={styles.img} src={props.image} alt="img" />
        </div>
        <div className={styles.content}>
          <p className={styles.data}>{props.date}</p>
          <h4 className={styles.title}>{props.title}</h4>
        </div>
      </div>
    </article>
  );
};

export default SearchItem;
