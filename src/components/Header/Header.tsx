import React from "react";
import Icons from "../Icons/Icons";

import styles from "./Header.module.css";

interface HeaderProps {
  onMenuClick: () => void;
  onSearchClick: () => void;
  onAvatarClick: () => void;
  onSearchChange: () => void;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button}>
        <Icons name="menu" />
      </button>
      <input
        type="text"
        name="search"
        placeholder="Search"
        className={styles.search}
      />
      <button className={styles.button}>
        <Icons name="search" />
      </button>
      <button className={styles.button}>
        <Icons name="person" />
      </button>
    </div>
  );
};

export default Header;