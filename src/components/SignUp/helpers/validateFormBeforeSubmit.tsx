import { FormErrors, FormValues } from "../SignUpForm";

export const validateFormBeforeSubmit = (
  values: FormValues
): FormErrors | null => {
  const errors: FormErrors = {};

  const { name, email, password, confirmPassword } = values;

  if (name.length < 1) {
    errors.name = "Field required";
  }

  if (email.length < 1) {
    errors.email = "Field required";
  }

  if (password.length < 1) {
    errors.password = "Field required";
  }

  if (password.length > 1 && password.length <= 6) {
    errors.password = "Password length should be more than 6";
  }

  if (password.length > 6 && password !== confirmPassword) {
    errors.password = "Password field and confirm password field aren't equal";
  }

  return Object.keys(errors).length ? errors : null;
};