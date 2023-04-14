import React from "react";
import styles from "./Input.module.css";
import cn from "classnames";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  helpText?: string;
  classNames?: {
    wrapper?: string;
  };
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  name,
  value,
  label,
  placeholder,
  helpText,
  error = false,
  classNames,
  onChange,
}) => {
  return (
    <div className={styles.wrapper}>
      {!!label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        className={cn(styles.input, { [styles.inputError]: error })}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
      {!!helpText && (
        <span
          className={cn(styles.helpText, { [styles.helpTextError]: error })}
        >
          {helpText}
        </span>
      )}
    </div>
  );
};

export default Input;
