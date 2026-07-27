import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Введіть коректний e-mail")
    .required("E-mail є обов'язковим"),

  password: yup
    .string()
    .min(6, "Пароль повинен містити мінімум 6 символів")
    .max(32, "Пароль занадто довгий")
    .required("Пароль є обов'язковим"),
});