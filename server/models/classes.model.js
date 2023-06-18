const mongoose = require("mongoose");

const ClassesSchema = new mongoose.Schema(
  {
    chefImage: {
      type: String,
      required: true,
    },
    chefName: {
      type: String,
      required: true,
    },
    chefAbout: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Classes = mongoose.model("classes", ClassesSchema);

module.exports = Classes;
