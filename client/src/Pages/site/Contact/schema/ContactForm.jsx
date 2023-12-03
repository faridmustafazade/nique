import * as yup from "yup";

export const ContactForm = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup
      .string()
      .email()
      .matches(/^(?!.*@[^,]*,)/),
    message: yup.string().required(),
  })
  .required();
