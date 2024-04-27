const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Menu = mongoose.model("menu", MenuSchema);

module.exports = Menu;
