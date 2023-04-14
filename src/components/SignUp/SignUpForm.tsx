import React, { useState, useCallback } from "react";

import styles from "./SignUpForm.module.css";
import { validateFormBeforeSubmit } from "./helpers/validateFormBeforeSubmit";

import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";

export interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
}

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const inputClassnames = { wrapper: styles.inputWrapper };

const SignUpForm = () => {
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
      <Title title="Sign Up" />
      <form className={styles.form} onSubmit={handleSubmit }>
      <Input
          classNames={inputClassnames}
          label="Name"
          type="text"
          name="name"
          onChange={handleChange}
          value={values.name}
          error={!!errors.name}
          helpText={errors.name}
        />
        <Input
          classNames={inputClassnames}
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
          error={!!errors.email}
          helpText={errors.email}
        />
        <Input
          classNames={inputClassnames}
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password}
          error={!!errors.password}
          helpText={errors.password}
        />
        <Input
          classNames={inputClassnames}
          label="Confirm password"
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={values.confirmPassword}
        />
        <Button
          content="Sigin Up"
          color="primary"
          size="large"
          disabled={false}
        />
        <p className={styles.bottomText}>
          Lorem ipsum dolor sit amet
          <a className={styles.link} href="#">
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
};
export default SignUpForm;
