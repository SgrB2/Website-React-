import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import styles from "./NavBar.module.css";

const NavBar = () => {
  const [navBar, setnavBar] = useState(false);

  const activeMenu = [styles.menu, styles.active].join(" ");

  return (
    <div className={styles.container}>
      <ul className={navBar ? activeMenu : styles.menu}>
        <li>
          <a className={styles.text} href="#">
            Blog
          </a>
        </li>
        <li>
          <a className={styles.text} href="#">
            Sign In
          </a>
        </li>
      </ul>
      <div onClick={() => setnavBar(!navBar)} className={styles.icon_bar}>
        {navBar ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </div>
  );
};

export default NavBar;
