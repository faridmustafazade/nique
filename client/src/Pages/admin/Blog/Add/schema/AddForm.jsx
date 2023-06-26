import * as yup from "yup";

export const AddForm = yup
  .object()
  .shape({
    image: yup.string().required(),
    description: yup.string().required(),
    about: yup.string().required(),
    history: yup.string().required(),
    history2: yup.string().required(),
    date: yup.string().required(),
  })
  .required();
