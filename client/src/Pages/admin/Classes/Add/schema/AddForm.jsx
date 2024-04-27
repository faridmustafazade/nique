import * as yup from "yup";

export const AddForm = yup
  .object()
  .shape({
    chefImage: yup.string().required(),
    chefName: yup.string().required(),
    chefAbout: yup.string().required(),
    class: yup.string().required(),
    type: yup.string().required(),
    price: yup.string().required(),
    about: yup.string().required(),
    image: yup.string().required(),
  })
  .required();
