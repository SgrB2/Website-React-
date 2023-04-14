import React from "react";
import styles from "./Tabs.module.css";

import cn from "classnames";

const Tabs: React.FC = () => {
  return (
    <div className={styles.tabs_container}>
      <ul className={styles.tabs}>
        <TabsElement content="All" />
        <TabsElement content="My favorites" />
        <TabsElement content="Popular" disabled={true} />
      </ul>
    </div>
  );
};

interface TabsElementProps {
  content: "All" | "My favorites" | "Popular";
  disabled?: boolean;
}

const TabsElement: React.FC<TabsElementProps> = ({
  content = "All",
  disabled = false,
}) => {
  return (
    <li
      className={cn({
        [styles.tabs_element]: true,
        [styles.disabled]: disabled,
      })}
    >
      {content}
    </li>
  );
};

export default Tabs;
