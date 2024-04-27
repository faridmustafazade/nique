const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    history: {
      type: String,
      required: true,
    },
    history2: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("blog", BlogSchema);

module.exports = Blog;
