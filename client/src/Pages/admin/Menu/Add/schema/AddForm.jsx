import * as yup from "yup";

export const AddForm = yup
  .object()
  .shape({
    image: yup.string().required(),
    name: yup.string().required(),
    price: yup.string().required(),
    category: yup.string().required(),
    about: yup.string().required(),
    class: yup.string().required(),
  })
  .required();
