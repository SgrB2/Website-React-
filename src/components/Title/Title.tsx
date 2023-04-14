import React from "react";

import styles from "./Title.module.css";


interface TitleProps {
    title: string;
  }
  
  const Title: React.FC<TitleProps> = (props) => {
    return <h1 className={styles.title}>{props.title}</h1>
  }

  export default Title;
