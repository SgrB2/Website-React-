import React, { useState, useCallback } from "react";

import styles from "./SignInForm.module.css";
import { validateFormBeforeSubmit } from "./helpers/validateFormBeforeSubmit";

import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";

export interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface FormErrors {
  email?: string;
  password?: string;
}

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
};


const SiginForm = () => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateFormBeforeSubmit(values);
    console.log(errors);

    if (errors) {
      setErrors(errors);
    } else {
      console.log(values);
      setErrors({});
      setValues(initialValues);
    }
  };

  return (
    <div className={styles.continer}>
      <Title title="Sign In" />
      <form className={styles.form} onSubmit={handleSubmit}>
      <Input
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
          error={!!errors.email}
          helpText={errors.email}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Your password..."
          onChange={handleChange}
          value={values.password}
          error={!!errors.password}
          helpText={errors.password}
        />
        <a className={styles.link_ForgotPassword} href="#">
          Forgot password?
        </a>
        <Button content="Sigin In" color="primary" size="large" />
        <p className={styles.bottomText}>
          Lorem ipsum dolor sit amet
          <a className={styles.link} href="#">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};
export default SiginForm;
