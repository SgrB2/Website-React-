import React from "react";

import styles from "./Footer.module.css";


interface FooterProps {
    copyright: string;
    rights: string;
}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <div className={styles.continer}>
      <p>{props.copyright}</p>
      <p>{props.rights}</p>
    </div>
  );
};

export default Footer;
