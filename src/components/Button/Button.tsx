import React, { useState } from "react";
import styles from "./Button.module.css";
import cn from "classnames";
import { log } from "console";

interface ButtonProps {
  content: string;
  disabled?: boolean;
  // onClick: () => void;
  color?: "primary" | "secondary" | "secondary2";
  size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({
  color = "primary",
  disabled = false,
  size = "medium",
  // onClick,
  content,
}) => {
  return (
    <button
      disabled={disabled}
      className={cn({
        [styles.primary]: color === "primary",
        [styles.secondary]: color === "secondary",
        [styles.secondary2]: color === "secondary2",
        [styles.disabled]: disabled,
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
      })}
    >
      {content}
    </button>
  );
};

export default Button;
